//Multiply function
const multiply = (a: number, b: number): number => a * b;

//Check even and odd number
const checkEvenOdd = (num: number): string => {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

//await to show result

const awaitResult = () => {
  const timer = setTimeout(() => {
     return 'show result after 5 seconds';
  }, 5000);
  return () => clearTimeout(timer);
};

export {multiply, checkEvenOdd, awaitResult};
