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
//graphql debounce

const debounce = (func: any, wait: any, immediate?: number) => {
  let timeout: any;
  function _debounce(this: any, ...args: any[]) {
    const later = function __debounce(this: any) {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, args);
    }
  }
  _debounce.stop = () => clearTimeout(timeout);
  return _debounce;
};

export {multiply, checkEvenOdd, debounce};
