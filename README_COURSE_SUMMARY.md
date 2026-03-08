# React Core Concepts – Course Summary

This project demonstrates key React concepts through a series of simple, focused components. Below is a summary of each component and the concepts it covers.

## Components Overview

### Welcome.jsx

- **Props**: Receives `name` and `alias` as props and displays them using JSX.

### UserProfile.jsx

- **JSX**: Simple static component structure.

### UserInfo.jsx

- **Props**: Receives and displays multiple props (`name`, `age`, `city`, `email`).

### UserDetails.jsx

- **Conditional Rendering**: Renders different UI based on props like `isOnline`, `isPremium`, `isNewUser`, and `role`.
- **Props**: Demonstrates passing and using multiple props.

### UserCard.jsx

- **Component Composition**: Uses `UserInfo` as a child component, passing props down.

### StyledForm.jsx

- **Forms**: Shows a styled form structure (no state/handlers in snippet).

### TodoList.jsx

- **useState Hook**: Uses `useState` for managing todo counter.
- **Component Composition**: Contains a `Todo` subcomponent.
- **Props**: Passes props to child component.

### Menu.jsx

- **Event Handling**: Handles click events and uses `alert` to show messages.

---

**React Basics Demonstrated:**

- JSX syntax for UI structure
- Passing and using props
- Conditional rendering
- Component composition (nesting components)
- useState for state management
- Event handling (e.g., button clicks)
- Basic form structure

These examples provide a foundation for understanding how React components are structured, how data flows via props, and how interactivity is handled.

### 1. App.jsx

- The main entry point that imports and renders all the example components.
- Switches between different demos by commenting/uncommenting components.

### 2. Counter.jsx

- Demonstrates the use of `useState` for managing a simple counter.
- Shows how state updates trigger re-renders.

### 3. SimpleCounter.jsx

- Explores multiple state updates in a single event handler.
- Shows how React batches state updates and how `setTimeout` affects batching.

### 4. PrevStateCounter.jsx

- Uses the functional form of `setState` to update state based on the previous value.
- Demonstrates multiple sequential updates using updater functions.

### 5. BatchingCounter.jsx

- Similar to `PrevStateCounter`, but with more state variables.
- Shows how batching works with multiple state updates in one handler.

### 6. LoginCard.jsx

- Demonstrates conditional rendering based on login state.
- Shows how to handle form input and toggle login/logout.

### 7. UserProfile.jsx

- Manages a user object in state, including nested objects.
- Demonstrates updating nested state (e.g., updating the city in the address).

### 8. TodoList.jsx

- Implements a simple todo list with add, remove, and toggle-done functionality.
- Demonstrates array state management and immutability.

### 9. ShoppingCart.jsx

- Manages a shopping cart with multiple items and quantities.
- Demonstrates updating object state and resetting state.

### 10. CounterWithReducer.jsx

- Introduces the `useReducer` hook for state management.
- Shows how to use actions to increment, decrement, and reset a counter.

### 11. ShoppingCartWithReducer.jsx

- Uses `useReducer` to manage a more complex shopping cart state.
- Demonstrates how reducers can scale to more complex state logic.
- Shows how actions in reducers can be objects with a `type` (describing what happened) and a `payload` (carrying extra data, such as the product to add or remove). For example:
  ```js
  // Example action object
  { type: 'ADD_ITEM', payload: { id: 1, name: 'React Course', price: 49.99 } }
  { type: 'REMOVE_ITEM', payload: 1 } // payload is the product id
  ```
  This pattern makes state management more scalable and expressive in complex UIs.

---

### As I understand:

- useReducer can handle state objects that have several related values, not just a single value.
- When you send an action to the reducer, you can include extra information using a property called payload.
- All the logic for updating the state is kept together in the reducer function, making it easier to manage and understand.
- When you update related values, they always change together, so your state stays consistent.

---
