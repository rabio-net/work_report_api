import axios from 'axios';
import { url, appId } from '../kintone/config';

export default class ProductIngredientService {
  async selectSemifinishedIngredients(pwAuth: string, harvestYear: string, ingredientId: string) {
    try {
      const param = encodeURI(
        `?app=${appId.semifinished_ingredient
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
        'selectSemifinishedIngredients error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async selectSemifinishedIngredients_includeSemifinished(pwAuth: string, semifinishedId: string) {
    try {
      const param = encodeURI(
        `?app=${appId.semifinished_ingredient
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
        'selectSemifinishedIngredients_includeSemifinished error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async selectSemifinishedIngredients_includeIngredientStoring(pwAuth: string, ingredientStoringId: string) {
    try {
      const param = encodeURI(
        `?app=${appId.semifinished_ingredient
        }&fields[0]=record_no&query=ingredient_storing_id in (${ingredientStoringId
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
        'selectSemifinishedIngredients_includeIngredientStoring error:',
        error.response ? error.response.data : error.message
      );
      return { status: error.status ?? 500 };
    }
  }
  async insertSemifinishedIngredient(pwAuth: string, body: object) {
    console.log('insertProductIngredient body', body)
    try {
      const res = await axios.post(
        url.record,
        {
          ...body,
          app: appId.semifinished_ingredient,
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
