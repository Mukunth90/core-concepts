import { Counter } from './Counter';
import { LoginCard } from './LoginCard';
import { SimpleCounter } from './SimpleCounter';
import { PrevStateCounter } from './PrevStateCounter';
import { BatchingCounter } from './BatchingCounter';
import { UserProfile } from './UserProfile';
import { TodoList } from './TodoList';
import { ShoppingCart } from './ShoppingCart';
import { CounterWithReducer } from './CounterWithReducer';
import { ShoppingCartWithReducer } from './ShoppingCartWithReducer.jsx';
import { CounterWithInit } from './CounterWithInit.jsx';
import { CustomCounter } from './CustomCounter.jsx';

import './App.css';

function App() {
  return (
    <>
      {/* <h1>React</h1>
      <Counter />
      <Counter />
      <LoginCard /> 
      <SimpleCounter />
      <PrevStateCounter />
      <BatchingCounter />
      <UserProfile /> 
      <TodoList />
      <ShoppingCart />
      <CounterWithReducer />
      <ShoppingCartWithReducer />
      <CounterWithInit />*/}
      <CustomCounter />
    </>
  );
}

export default App;
