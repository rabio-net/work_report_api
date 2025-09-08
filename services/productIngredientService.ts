import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class ProductIngredientService {
  async selectProductIngredients(pwAuth: string, harvestYear: string, ingredientId: string) {
    try {
      const param = encodeURI(
        `?app=${appId.product_ingredient
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
      return { status: res.status, data: res.data.records }
    } catch (error: any) {
      console.error(
        'selectProductIngredients error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async selectProductIngredients_includeSemifinished(pwAuth: string, semifinishedId: string) {
    try {
      const param = encodeURI(
        `?app=${appId.product_ingredient
        }&fields[0]=record_no&query=semifinished_id in (${semifinishedId
        }) order by record_no desc limit 1
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
      return { status: res.status, data: res.data.records }
    } catch (error: any) {
      console.error(
        'selectProductIngredients error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async insertProductIngredient(pwAuth: string, body: object) {
    try {
      const res = await axios.post(
        url.record,
        {
          ...body,
          app: appId.product_ingredient,
        },
        {
          headers: {
            'X-Cybozu-Authorization': pwAuth,
            'Content-Type': 'application/json',
          },
        },
      );
      return { status: res.status, data: res.data }
    } catch (error: any) {
      console.error(
        'insertProductIngredient error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
}
