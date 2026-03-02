import { useState } from 'react';

export const PrevStateCounter = () => {
  const [count, SetCount] = useState(0);
  console.log('Render phase: Component rendering with count is', count);

  const handleClick = () => {
    SetCount((prev) => {
      console.log('First updater fn: prev count =', prev);
      return prev + 1;
    });

    SetCount((prev) => {
      console.log('Second updater fn: prev count =', prev);
      return prev + 5;
    });

    SetCount((prev) => {
      console.log('Third updater fn: prev count =', prev);
      return prev + 10;
    });
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increse Count</button>
    </div>
  );
};
