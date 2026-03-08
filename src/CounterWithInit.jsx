import { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'incerment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const init = (initialValue) => {
  //init function receives one argument, which is whatever we pass as a secound argument to useReducer()
  console.log('init function called - this only runs once');

  const savedCount = localStorage.getItem('Count');

  if (savedCount !== null) {
    console.log('Found Saved Count', savedCount);
    return parseInt(savedCount);
  }

  console.log('No saved count using initial Value', initialValue);
  return initialValue;
};

export const CounterWithInit = () => {
  const [count, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch('incerment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};
