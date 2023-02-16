import {requests} from './HttpClient';
import {LoginModel} from '../models/LoginModel';

export const AuthService = {
  login: (loginModel: LoginModel): Promise<string> => requests.post('/login', loginModel),
  register: (registerModel: LoginModel): Promise<string> => requests.post('/register', registerModel)
}