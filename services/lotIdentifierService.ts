import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class LotIdentifierService {
  async selectLotIdentifiers(
    pwAuth: string,
    ingredientId: string,
    productStandardId: string,
  ) {
    try {
      const param = encodeURI(
        `?app=${appId.lot_identifier
        }&query=ingredient_id = ${
          ingredientId
        } and product_standard_id = ${
          productStandardId
        } order by record_no desc limit 1
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
        'selectLotIdentifiers error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async insertLotIdentifier(pwAuth: string, body: object) {
    console.log('insertLotIdentifier body', body)
    try {
      const res = await axios.post(
        url.record,
        {
          ...body,
          app: appId.lot_identifier,
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
        'insertLotIdentifier error:',
        error.response ? error.response.data : error.message
      );
      console.error(
        'error.response', error.response
      );
      return { status: error.status ?? 500 };
    }
  }
}
