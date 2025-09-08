import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class IngredientService {
  async selectIngredients(pwAuth: string) {
    try {
      const param = encodeURI(
        `?app=${appId.ingredient
        }&query=order by ingredient_classification_display_order asc, ingredient_classification_id asc, name asc
        `
      );
      const res = await axios.get(
        url.records + param,
        {
          headers: {
            'X-Cybozu-Authorization': pwAuth,
          },
        },
      );
      console.log('res', res.status, res.data);
      return { status: res.status, data: res.data.records }
    } catch (error: any) {
      console.error(
        'selectIngredients error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
}