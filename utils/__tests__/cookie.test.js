import exp from 'constants';
import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
} from '../cookies.ts';
import { updateQuantity } from '../updateQuantity';

test('setting, getting and deleting a cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: '1', quantity: 2 }],
  };
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});

test('updating quantity in item of cookie', () => {
  deleteCookie('testCart');
  expect(getParsedCookie('testCart')).toBeUndefined();
  expect(updateQuantity(1, 3));
  expect(getParsedCookie('testCart')).toStrictEqual([{ id: 1, quantity: 3 }]);

  // test delete cookie:

  expect(deleteCookie('testCookie')).toBe(undefined);
  expect(getParsedCookie('testCookie')).toBe(undefined);
});
