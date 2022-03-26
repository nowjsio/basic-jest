export const fetchProduct = (message) => {
  if (message && message === 'error') {
    return Promise.reject('NetworkError');
  }
  return Promise.resolve({ name: 'jw', age: 6 });
};

export const timeoutPrint = async (print, ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve(print), ms);
  });
};
