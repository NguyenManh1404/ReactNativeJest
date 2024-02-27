//npx jest helper.test.tsx
import {multiply, checkEvenOdd, awaitResult} from '../src/utils/helpers';

import {waitFor} from '@testing-library/react-native';

//Multiply function
describe('multiply tests', () => {
  it('multiply 4 * 3 to equal 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  it('multiply 4 * -3 to equal -12', () => {
    expect(multiply(4, -3)).toBe(-12);
  });
});

//Check even and odd number
describe('check odd and even number tests', () => {
  it('10 is a even number', () => {
    expect(checkEvenOdd(10)).toBe('Even');
  });
  it('7 is a odd number', () => {
    expect(checkEvenOdd(7)).toBe('Odd');
  });
  it('-3 is a odd number', () => {
    expect(checkEvenOdd(-3)).toBe('Odd');
  });
});

//
jest.useFakeTimers();
test('show when end 5 seconds', async () => {
  // Wait for the result using waitFor
  const result = await waitFor(() => awaitResult());
  expect(result).toHaveBeenCalledTimes(5).toBe('show result after 5 seconds');
});
