import { Router } from 'express';
import { container } from 'tsyringe';

import multer from 'multer';
import uploadConfig from '@config/upload';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatar from '@modules/users/services/UpdateUserAvatarservice';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureauthenticated';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UpdateUseravatarService from '@modules/users/services/UpdateUserAvatarservice';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = container.resolve(UpdateUseravatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
