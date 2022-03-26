import { timeoutPrint, fetchProduct } from '../async.js';

describe('fetchProduct', () => {
  describe('success', () => {
    test('async - wrong', () => {
      // 다음과 같이 test code 를 작성하면 test method 에서는 then 을 기다리지 않아, 제대로 된 테스트를 할 수 없다.
      fetchProduct().then(
        (item) => expect(item).toEqual({ name: 'jw', age: 6 }), // age: 7 로 하면 exception 발생하면서 테스트 코드 중단됨
      );
    });

    test('async - done', (done) => {
      // 느리다. 그래서 이 방법은 잘 안쓰임.
      fetchProduct().then((item) => {
        expect(item).toEqual({ name: 'jw', age: 6 });
        done();
      });
    });

    test('async - reuturn', () => {
      return fetchProduct().then((item) =>
        expect(item).toEqual({ name: 'jw', age: 6 }),
      );
    });

    test('async - await - resolve', async () => {
      const fetchItem = await fetchProduct();
      expect(fetchItem).toEqual({ name: 'jw', age: 6 });
    });

    test('async - await - reject', async () => {
      try {
        const fetchItem = await fetchProduct('error');
      } catch (e) {
        console.log(e);
        // expect(e).toMatch(/NetworkError/); // regex || string 사용
        expect(e).toMatch(/networkerror/i);
      }
    });

    test('async - promise - resolve', () => {
      return expect(fetchProduct()).resolves.toEqual({ name: 'jw', age: 6 });
    });

    test('async - promise - reject', () => {
      return expect(fetchProduct('error')).rejects.toMatch('NetworkError');
    });
  });
});

test("timtoutPrint ('hello', 5000)", async () => {
  const printMessgae = await timeoutPrint('hello', 5000);
  expect(printMessgae).toBe('hello');
});
