import { useState } from 'react';
import { useEffect } from 'react';

import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

import inventoryData from './assets/inventory.json';
import './App.css';

function App() {
  // Invoke useState and useEffect to load in inventory data
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  // Invoke useState and define functions for cart functionality
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(id) {
    const target = inventory.find((item) => item.id === id);

    // If item of id not found, raise error
    if (!target) {
      console.error('cart error: item not found');
      return;
    }

    // Otherwise, append to cart the new item
    const cartItem = { ...target, cartItemId: Date.now() };
    console.log(cartItem);
    setCart([...cart, cartItem]);
  }

  function removeItemFromCart(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart([...updatedCart]);
  }

  function promoteItem() {
    return (
      <ProductCard
        name="Limited Edition Tee!"
        description="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!"
      />
    );
  }

  return (
    <main>
      <Header cart={cart} />
      <ProductList
        inventory={inventory}
        handleAddItemToCart={handleAddItemToCart}
      >
        {promoteItem()}
      </ProductList>
    </main>
  );
}

export default App;
