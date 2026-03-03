import { use, useState } from 'react';

export const BatchingCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isActive, setIsAvtive] = useState(false);

  console.log('Render phase: Component rendering');

  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });

    setCount((prev) => {
      return prev + 5;
    });

    setCount((prev) => {
      return prev + 10;
    });

    setName('Updated');

    setIsAvtive(true);
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      <p>Name : {name}</p>
      <p>Active : {isActive ? 'Yes' : 'No'}</p>
      <button onClick={handleClick}>Update all three</button>
    </div>
  );
};
