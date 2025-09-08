import axios from 'axios';
import { url } from './config';

export const getKintoneUser = async (username: string, pw_auth: string) => {
  const param = encodeURI(
    `?codes[0]=${username}`
  );
  try {
    const loginUser = await axios.get(
      url.users + param,
      {
        headers: {
          'X-Cybozu-Authorization': pw_auth,
        },
      },
    );
    console.log('loginUser', loginUser.status, loginUser.data);
    if (
      loginUser &&
      loginUser.status === 200 &&
      loginUser.data &&
      loginUser.data.users &&
      loginUser.data.users.length === 1
    ) return loginUser.data.users[0];
    else return undefined;

  } catch (error: any) {
    console.error(
      'getKintoneUser error:',
      error.response ? error.response.data : error.message
    );
    return undefined;
  }
};
