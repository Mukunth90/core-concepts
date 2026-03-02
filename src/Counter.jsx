import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(() => {
    console.log('Intial state redered');
    return 0;
  });
  // currentValue, setterFunction = useState(initialValue)

  console.log('Counter Rendered with Count', count);

  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Count : {count}</button>;
};
