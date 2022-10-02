export default class ProductClient {
  constructor() {}

  fetchItems = () => {
    return fetch('https://test.com/test').then((res) => res.json());
  };
}
