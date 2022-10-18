import { cartSum } from '../cartSum';

test('Test cart sum function', () => {
  const testProducts = [
    { id: 1, cart: 1, price: 15 },
    { id: 2, cart: 2, price: 15 },
  ];
  expect(cartSum(testProducts)).toBe(45);
});
