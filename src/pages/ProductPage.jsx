import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { products } from "../contexts/Products";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  /* The below extracts clicked product's detail by ID */
  const extractProductbyID = products.filter((product) => {
    if (product.id === id) {
      return product;
    }
  });
  /* The above extracts clicked product's detail by ID */

  const product = extractProductbyID[0];

  if (!product) {
    return <div>Product not found </div>;
  }

  return (
    <main className="h-screen">
      <div className="w-full h-[60vh] text-center flex flex-col border">
        <img src={product.image} alt={product.title} className="w-full h-50 " />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button className="border" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </main>
  );
};

export default ProductPage;

/* const product = {
  id,
  title: `Product ${id}`,
  price: 39.99,
  image: "https://via.placeholder.com/200",
  description: "This is a sample product description.",
}; */
