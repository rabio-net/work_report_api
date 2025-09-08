import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class IngredientStoringService {
  async selectIngredientStoring(pwAuth: string, id: string) {
    try {
      const param = encodeURI(
        `?app=${appId.ingredient_storing
        }&id=${id
        }`
      );
      const res = await axios.get(
        url.record + param,
        {
          headers: {
            'X-Cybozu-Authorization': pwAuth,
          },
        },
      );
      console.log('res', res.status, res.data);
      return { status: res.status, data: res.data.record }
    } catch (error: any) {
      console.error(
        'selectIngredientStoring error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
}
