import { useState } from 'react';

export const SimpleCounter = () => {
  const [count, SetCount] = useState(0);
  console.log('Render phase: Component rendering with count is', count);

  const handleClick = () => {
    SetCount(count + 1);
    console.log('After setCount, count (count + 1) is:', count);
    SetCount(count + 5);
    console.log('After setCount, count (count + 5) is:', count);
    SetCount(count + 10);
    console.log('After setCount, count (count + 10) is:', count);
    setTimeout(() => {
      console.log('After 2sec count is:', count);
    }, 2000);
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increse Count</button>
    </div>
  );
};
