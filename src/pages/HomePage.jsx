import { Link } from "react-router-dom";
import { images, products } from "../contexts/Products";
import ProductCarousel from "../components/ProductCarousel";
import ScrollToTopLink from "../components/ScrollToTopLink";
import heroImage from "../assets/IMG_4215-scaled_a9ee11c2-7283-4bee-9482-b464ff1f2879.webp"

const HomePage = () => {
  return (
    <div className="w-full h-auto ">
      <div className="h-[80vh] bg-cover" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="h-[60vh] text-white text-center flex justify-end items-center gap-8 p-4 flex-col mb-12 ">
          <span className="text-xs">EXPLORE OUR NEW COLLECTION</span>
          <div className="flex gap-4">
            <span>O</span>
            <span>O</span>
            <span>O</span>
            <span>O</span>
          </div>
        </div>
      </div>
      <div className="w-full p-4 text-xs flex flex-col">
        <h2 className="mb-5 font-bold">NEW IN</h2>
        <p className="mb-5">EXPLORE OUR NEW COLLECTION</p>
        <ScrollToTopLink to="/allproducts" className="mb-8 ">
          <span className="w-full h-full border-b pb-1">Shop New In</span>
        </ScrollToTopLink>
        <ProductCarousel />
      </div>
    </div>
  );
};

export default HomePage;
