import { useState } from 'react';

export const ShoppingCart = () => {
  const [cartItems, SetCartItems] = useState({
    reactCourse: 0,
    vueCourse: 0,
  });

  const handleReactCourse = () => {
    if (cartItems.reactCourse < 5) {
      SetCartItems({
        ...cartItems,
        reactCourse: cartItems.reactCourse + 1,
      });
    }
  };

  const handlevueCourse = () => {
    SetCartItems({
      ...cartItems,
      vueCourse: cartItems.vueCourse + 1,
    });
  };

  const prices = {
    reactCourse: 49.99,
    vueCourse: 39.99,
  };

  const clearCart = () => {
    SetCartItems({
      reactCourse: 0,
      vueCourse: 0,
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ProductCard
        name="React Course"
        price={prices.reactCourse}
        quantity={cartItems.reactCourse}
        onAddToCart={handleReactCourse}
      />
      <ProductCard
        name="Vue Course"
        price={prices.vueCourse}
        quantity={cartItems.vueCourse}
        onAddToCart={handlevueCourse}
      />
      <CartSummary cartItems={cartItems} prices={prices} />
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export const ProductCard = ({ name, price, quantity, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price : ${price}</p>
      <p>Quantity : {quantity} </p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export const CartSummary = ({ cartItems, prices }) => {
  const TotalItems = cartItems.reactCourse + cartItems.vueCourse;
  const TotalPrice =
    cartItems.reactCourse * prices.reactCourse +
    cartItems.vueCourse * prices.vueCourse;
  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {TotalItems}</p>
      <p>Total Price: ${TotalPrice.toFixed(2)}</p>
    </div>
  );
};
