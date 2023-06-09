import config from '../../../config';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './users.utils';

const CreateUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId();

  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_password as string;
  }

  const createUser = await User.create(user);
  if (!createUser) {
    throw new Error('Failed to create user!');
  }
  return createUser;
};

export const UserService = {
  CreateUser,
};
