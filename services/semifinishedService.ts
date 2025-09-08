import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class SemifinishedService {
  async selectSemifinisheds(pwAuth: string, harvestYear: string, ingredientId: string) {
    try {
      const param = encodeURI(
        `?app=${appId.semifinished
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
        'selectSemifinisheds error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async selectSemifinished(pwAuth: string, id: string) {
    try {
      const param = encodeURI(
        `?app=${appId.semifinished
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
        'selectSemifinished error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async insertSemifinished(pwAuth: string, body: object) {
    console.log('insertSemifinished', body)
    try {
      const res = await axios.post(
        url.record,
        {
          ...body,
          app: appId.semifinished,
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
        'insertSemifinished error:',
        error.response ? error.response.data : error.message
      );
      console.error(
        'error.response', error.response
      );
      return { status: error.status ?? 500 };
    }
  }
  async updateSemifinished(pwAuth: string, body: object) {
    try {
      const res = await axios.put(
        url.record,
        {
          ...body,
          app: appId.semifinished,
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
        'updateSemifinished error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
}
