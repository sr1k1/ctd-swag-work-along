import ProductCard from './ProductCard';

function ProductList({ inventory, handleAddItemToCart, children }) {
  return (
    <ul>
      {children}
      {inventory.map((item) => {
        return (
          <ProductCard
            key={item.id}
            name={item.baseName}
            itemId={item.id}
            description={item.baseDescription}
            handleAddItemToCart={handleAddItemToCart}
          />
        );
      })}
    </ul>
  );
}

export default ProductList;
