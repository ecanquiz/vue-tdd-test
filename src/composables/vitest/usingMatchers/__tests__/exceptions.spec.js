import { expect, test } from 'vitest'

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrowError();
  expect(() => compileAndroidCode()).toThrowError(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrowError('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrowError(/JDK/);
});
