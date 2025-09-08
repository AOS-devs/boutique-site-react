import { Link } from "react-router-dom";
import { images, products } from "../contexts/Products";


const HomePage = () => {
  return (
    <div className="w-full h-auto">
      <div className="h-[60vh] bg-[#151515] text-white text-center flex justify-end items-center gap-8 p-4 flex-col mb-12 ">
        <span className="text-xs">EXPLORE OUR NEW COLLECTION</span>
        <div className="flex gap-4">
          <span>O</span>
          <span>O</span>
          <span>O</span>
          <span>O</span>
        </div>
      </div>
      <div className="w-full border p-4 text-xs">
        <h2 className="mb-5 font-bold">NEW IN</h2>
        <p className="mb-5">EXPLORE OUR NEW COLLECTION</p>
        <Link to="/">
          <span className="border-b pb-0.5">Shop New In</span>
        </Link>
        <div className="flex gap-4 w-full h-80 overflow-x-auto [scrollbar-width:none] mt-8">
          
          {/* <div className="w-50 h-full border flex flex-col flex-shrink-0 items-center">
            <figure className="mb-4 w-full ">
              <img src={images[1]} alt="" className="w-full h-55 " />
            </figure>
            <h2 className="mb-2 font-bold">{products[0].title}</h2>
            <p className="mb-3">${products[0].price} USD</p>
            <p className="mb-3">Available in 3 colors</p>
          </div> */}

          {products.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div  className="w-50 h-full flex flex-col flex-shrink-0 items-center">
                  <figure className="mb-4 w-full shadow-2xl ">{/* review shadow tailwind */}
                    <img src={product.image} alt="" className="w-full h-55 object-cover" />
                  </figure>
                  <h2 className="mb-2 font-bold">{product.title}</h2>
                  <p className="mb-3">${product.price} USD</p>
                  <p className="mb-3">Available in 3 colors</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
