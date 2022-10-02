import ProductClient from './product-client';

export default class ProductService {
  constructor() {
    this._ProductClient = new ProductClient();
  }

  async fetchItemsAvailable() {
    const results = await this._ProductClient.fetchItems();
    console.log(`[JW_TEST] results@@: ${results}`);
    return results.filter((item) => item.available);
  }
}
