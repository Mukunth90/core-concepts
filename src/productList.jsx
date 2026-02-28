export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1099,
    },
    {
      id: 2,
      name: 'Phone',
      price: 899,
    },
    {
      id: 3,
      name: 'Tablet',
      price: 599,
    },
    {
      id: 4,
      name: 'Watch',
      price: 299,
    },
    {
      id: 5,
      name: 'Headphones',
      price: 199,
    },
  ];

  const productElements = products
    .filter((product) => {
      return product.price > 500;
    })

    .map((product) => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>
    ));

  return (
    <div>
      <h2> Product List</h2>
      {productElements}
    </div>
  );
};
