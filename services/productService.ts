import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class ProductService {
  async selectProducts(pwAuth: string, harvestYear: string, ingredientId: string) {
    try {
      const param = encodeURI(
        `?app=${appId.product
        }&query=harvest_year = ${harvestYear
        } and ingredient_id = ${ingredientId
        } order by record_no desc
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
        'selectProducts error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async selectProduct(pwAuth: string, id: string) {
    try {
      const param = encodeURI(
        `?app=${appId.product
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
        'selectProduct error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async insertProduct(pwAuth: string, body: object) {
    console.log('insertProduct body', body)
    try {
      const res = await axios.post(
        url.record,
        {
          ...body,
          app: appId.product,
        },
        {
          headers: {
            'X-Cybozu-Authorization': pwAuth,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('res', res.status, res.data);
      return { status: res.status, data: res.data }
    } catch (error: any) {
      console.error(
        'insertProduct error:',
        error.response ? error.response.data : error.message
      );
      console.error(
        'error.response', error.response
      );
      return { status: error.status ?? 500 };
    }
  }
  async updateProduct(pwAuth: string, body: object) {
    console.log('updateProduct', body)
    try {
      const res = await axios.put(
        url.record,
        {
          ...body,
          app: appId.product,
        },
        {
          headers: {
            'X-Cybozu-Authorization': pwAuth,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('res', res.status, res.data);
      return { status: res.status, data: res.data.record }
    } catch (error: any) {
      console.error(
        'updateProduct error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
}
