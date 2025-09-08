import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class ProductStandardService {
  async selectProductStandards(
    pwAuth: string,
    ingredientClassificationId: string,
  ) {
    try {
      const param = encodeURI(
        `?app=${appId.product_standard
        }&fields[0]=record_no&fields[1]=name&query=ingredient_classification_id = ${
          ingredientClassificationId
        } order by display_order asc, record_no asc
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
        'selectProductStandards error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
}
