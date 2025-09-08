import { sign } from 'jsonwebtoken';
import { getKintoneUser } from '../kintone/auth';
require('dotenv').config();

export default class AuthService {
  async login(
    username: string,
    password: string,
  ) {
    try {
      const pa = btoa(`${username}:${password}`);
      const user = await getKintoneUser(username, pa);
      if (!user) return { status: 401 };
      const token = sign(
        { id: user.id, name: user.name, code: pa },
        process.env.JWT_SECRET_KEY ?? '',
        //{ expiresIn: '600000' }, // 10 minutes
        { expiresIn: '10h' }, // 10 hours
      );
      return {
        status: 200,
        user: {
          id: user.id,
          name: user.name,
        },
        token,
      };
    } catch (e) {
      console.error('AuthService login', e);
      return { status: 401 };
    }
  }

  async logout() {}
}