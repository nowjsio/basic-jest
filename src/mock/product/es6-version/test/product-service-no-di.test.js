import ProductClient from '../product-client.js';
import ProductService from '../product-service-no-di.js';
import { jest } from '@jest/globals';
jest.mock('../product-client.js');

ProductClient.mockImplementation(() => {
  return {
    fetchItems: jest.fn(async () => {
      console.log(`mocking fetchItems@@@@@@@@@@@@@@@@@@@@@@@@@`);
      return [
        { item: 'Bread', available: true },
        { item: 'Milk', available: false },
        { item: 'Pizza', available: true },
      ];
    }),
  };
});

// const mockClient = jest.fn().mockImplementation(() => {
//   return {
//     fetchItems: jest.fn(async () => {
//       console.log(`mocking fetchItems@@@@@@@@@@@@@@@@@@@@@@@@@`);
//       return [
//         { item: 'Bread', available: true },
//         { item: 'Milk', available: false },
//         { item: 'Pizza', available: true },
//       ];
//     }),
//   };
// });

// jest.mock('../product-client.js', () => {
//   return mockClient;
// });

describe('ProductService', () => {
  /**
   * let _ProductService;
   * beforeEach(() => {
   *  _ProductService = new ProductService();
   * });
   *  ProductService 에서는 ProductClient의 함수를 내부적으로 사용하고있다.
   *  따라서, client 와 독립적으로 test 를 하기 위해서는 (network 사용 하지 않도록)
   *  ProductClient 를 mocking 한다.
   */

  let _ProductService;
  beforeEach(() => {
    _ProductService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await _ProductService.fetchItemsAvailable();
    expect(items).toEqual([
      { item: 'Bread', available: true },
      { item: 'Pizza', available: true },
    ]);
    expect(items.length).toBe(2);
  });
});
