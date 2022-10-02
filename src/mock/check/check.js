export const check = (predicate, onSuccess, onFail) => {
  if (predicate && predicate()) {
    onSuccess('success');
  } else {
    onFail('failed');
  }
};
