import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateUseravatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401);
    }

    if (user.avatar) {
      const userAvatarFilepath = path.join(uploadConfig.directory, user.avatar);
      const useravatarFileExists = await fs.promises.stat(userAvatarFilepath);

      if (useravatarFileExists) {
        await fs.promises.unlink(userAvatarFilepath);
      }
    }

    user.avatar = avatarFilename;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUseravatarService;
