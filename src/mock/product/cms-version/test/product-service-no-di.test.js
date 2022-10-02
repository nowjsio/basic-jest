// const ProductClient = require('../product-client.js');
// const ProductService = require('../product-service-no-di.js');
// jest.mock('../product-client.js');
// describe('ProductService', () => {
//   /**
//    * let _ProductService;
//    * beforeEach(() => {
//    *  _ProductService = new ProductService();
//    * });
//    *  ProductService 에서는 ProductClient의 함수를 내부적으로 사용하고있다.
//    *  따라서, client 와 독립적으로 test 를 하기 위해서는 (network 사용 하지 않도록)
//    *  ProductClient 를 mocking 한다.
//    */

//   const fetchItems = jest.fn(async () => {
//     return [
//       { item: 'Bread', available: true },
//       { item: 'Milk', available: false },
//       { item: 'Pizza', available: true },
//     ];
//   });
//   ProductClient.mockImplemetation(() => {
//     return {
//       fetchItems,
//     };
//   });

//   let _ProductService;
//   beforeEach(() => {
//     _ProductService = new ProductService();
//   });

//   it('should filter out only available items', async () => {
//     const items = await _ProductService.fetchItemsAvailable();
//     expect(items).toEqual([
//       { item: 'Bread', available: true },
//       { item: 'Pizza', available: true },
//     ]);
//     expect(items.length).toBe(2);
//   });
// });

describe('comment out upon example, but it is important', () => {
  it('test', () => {
    expect(1).toBe(1);
  });
});
