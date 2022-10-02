import ProductClient from './product-client';

export default class ProductService {
  constructor() {
    this._ProductClient = new ProductClient();
  }

  fetchItemsAvailable = () => {
    return this._ProductClient
      .fetchItems()
      .then((results) => results.filter((item) => item.available));
  };
}
