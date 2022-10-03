import { jest } from '@jest/globals';
import { check } from '../check';

// jest.mock(`../check.js`);
// check.mockImplementation((predicate, onSuccess, onFail) => {
//   if (predicate && predicate()) {
//     onSuccess('success@');
//   } else {
//     onFail('failed');
//   }
// });
describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  test("should call 'onSuccess' when 'predicate' is true", () => {
    check(() => true, onSuccess, onFail);
    // AS-IS
    // expect(onSuccess.mock.calls.length).toBe(1);
    // TO-BE
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // AS-IS
    // expect(onSuccess.mock.calls[0][0]).toBe('success');
    // TO-BE
    expect(onSuccess).toHaveBeenCalledWith('success');

    expect(onFail).toHaveBeenCalledTimes(0);
  });

  test("should call 'onSuccess' when 'predicate' is true", () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('failed');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
