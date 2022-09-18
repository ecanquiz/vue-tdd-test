import fetchData from '../fetchDataPromise';

// resolves

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

// or

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toMatch('peanut butter');
});

// rejects

test('the fetch fails with an error', () => {
  return expect(fetchData(false)).rejects.toBe('error');
});

// or

test('the fetch fails with an error', () => {
  return expect(fetchData(false)).rejects.toMatch('error');
});
