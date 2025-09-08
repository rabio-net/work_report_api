import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class ProductSizeService {
  async selectProductSizes(pwAuth: string) {
    try {
      const param = encodeURI(
        `?app=${appId.product_size
        }&query=order by record_no asc
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
        'selectProductSizes error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
}
