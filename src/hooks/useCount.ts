import {useState} from 'react';

export const useCount = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(previousCount => previousCount + 1);
  const decrement = () => setCount(previousCount => previousCount - 1);

  return {count, increment, decrement};
};
