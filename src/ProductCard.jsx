function ProductCard({ name, description, itemId, handleAddItemToCart }) {
  return (
    <li>
      <div className="itemCard">
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={() => handleAddItemToCart(itemId)}>Add to Cart</button>
      </div>
    </li>
  );
}

export default ProductCard;
