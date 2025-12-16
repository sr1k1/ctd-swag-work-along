import { useState } from 'react';
import { useEffect } from 'react';

import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

import inventoryData from './assets/inventory.json';
import './App.css';

function App() {
  // Invoke useState with initial inventory data
  const [inventory, setInventory] = useState([]);

  // Use useEffect to load in the inventory ONLY on first load-in
  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

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
      <Header />
      <ProductList inventory={inventory}>{promoteItem()}</ProductList>
    </main>
  );
}

export default App;
