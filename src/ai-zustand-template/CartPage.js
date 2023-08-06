import React from 'react';
import create from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] })),
  removeFromCart: (productId) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
}));

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
];

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  // Calculate the total price and total quantity
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleReset = () => {
    // Reset quantities to 1 for all products
    const resetCart = products.map((product) => ({ ...product, quantity: 0 }));
    useCartStore.setState({ cart: resetCart });
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Quantity: {totalQuantity}</p>
      <button onClick={handleReset}>Reset Quantities</button>
    </div>
  );
};

export default CartPage;
