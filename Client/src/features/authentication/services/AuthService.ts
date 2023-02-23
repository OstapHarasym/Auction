import {requests} from '../../../core/HttpClient';
import {LoginModel} from '../types/LoginModel';

export const AuthService = {
  login: (loginModel: LoginModel): Promise<string> => requests.post('/login', loginModel),
  register: (registerModel: LoginModel): Promise<string> => requests.post('/register', registerModel)
}