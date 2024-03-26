export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  activationToken?: string;
  resetPasswordToken?: string;
  state?: number;
  name?: string;
}

export interface UserLoginResponseInterface {
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  names: string;
}

interface UserPreferenceInterface {
  lang: string;
}

export interface RegisterRequestInterface {
  names: string;
  lastNames: string;
  phone: string;
  email: string;
  password: string;
  acceptPolicies: boolean;
  acceptDataProcessing: boolean;
}
export interface UserStoreInterface {
  userData: UserInterface;
  isLogged: boolean;
  preferences: UserPreferenceInterface;
}

export interface UserInformationInterface {
  documentType: number;
  documentNumber: string;
  names: string;
  lastNames?: string;
  phone?: string;
  email?: string;
}

export interface UpdateUserProfileRequestInterface {
  userId: string;
  names: string;
  lastNames: string;
  phone: string;
  birthDay: string;
  documentType: number;
  documentNumber: string;
}

export interface SendEmailRecoveryPasswordRequestInterface {
  email: string;
}
