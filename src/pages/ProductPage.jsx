import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = {
    id,
    title: `Product ${id}`,
    price: 39.99,
    image: "https://via.placeholder.com/200",
    description: "This is a sample product description.",
  };

  return (
    <div>
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
