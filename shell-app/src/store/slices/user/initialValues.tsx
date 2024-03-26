import { UserStoreInterface } from './user.interface';

const lang = 'es';

const initialUserData = {
  email: '',
  id: '',
  firstName: '',
  lastName: ''
};

export const UserDefault: UserStoreInterface = {
  userData: initialUserData,
  isLogged: false,
  preferences: {
    lang
  }
};
