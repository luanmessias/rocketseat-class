import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import User from '../models/User';

interface Request {
  userId: string;
  avatarFilename: string;
}

class UpdateUseravatarService {
  public async execute({ userId, avatarFilename }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(userId);

    if (!user) {
      throw new Error('Only authenticated users can change avatar');
    }

    if (user.avatar) {
      const userAvatarFilepath = path.join(uploadConfig.directory, user.avatar);
      const useravatarFileExists = await fs.promises.stat(userAvatarFilepath);

      if (useravatarFileExists) {
        await fs.promises.unlink(userAvatarFilepath);
      }
    }

    user.avatar = avatarFilename;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUseravatarService;
