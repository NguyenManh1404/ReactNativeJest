//npx jest funtionHelper.test.tsx
import {multiply, checkEvenOdd} from '../src/utils/helpers';

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
