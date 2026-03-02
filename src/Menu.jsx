import { MenuItem } from './MenuItem';

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    alert(`You order ${itemName} for the price ${itemPrice}`);
  };
  return (
    <div>
      <h2>Our Menu</h2>
      <MenuItem name="Pizza" price={12.99} onOrder={handleOrder} />
      <MenuItem name="Burger" price={8.99} onOrder={handleOrder} />
      <MenuItem name="Salad" price={6.99} onOrder={handleOrder} />
    </div>
  );
};
