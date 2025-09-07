import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    title: "Product One",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product Two",
    price: 49.99,
    image: "https://via.placeholder.com/150",
  },
];

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
          <div className="w-50 h-full border flex flex-col flex-shrink-0 items-center">
            <figure className="mb-4">
              <img src="" alt="" className="w-full h-55 object-cover " />
            </figure>
            <h2 className="mb-2 font-bold">HF X BURNA SLEEVLESS TEE</h2>
            <p className="mb-3">$208.96 USD</p>
            <p className="mb-3">Available in 3 colors</p>
          </div>

          <div className="w-50 h-full border flex flex-col flex-shrink-0 items-center">
            <figure className="mb-4">
              <img src="" alt="" className="w-full h-55" />
            </figure>
            <h2 className="mb-2 font-bold">HF X BURNA SLEEVLESS TEE</h2>
            <p className="mb-3">$208.96 USD</p>
            <p className="mb-3">Available in 3 colors</p>
          </div>
          <div className="w-50 h-full border flex flex-col flex-shrink-0 items-center">
            <figure className="mb-4">
              <img src="" alt="" className="w-full h-55" />
            </figure>
            <h2 className="mb-2 text-[12px] font-bold">
              HF X BURNA SLEEVLESS TEE
            </h2>
            <p className="mb-3">$208.96 USD</p>
            <p className="mb-3">Available in 3 colors</p>
          </div>
          <div className="w-50 h-full border flex flex-col flex-shrink-0 items-center">
            <figure className="mb-4">
              <img src="" alt="" className="w-full h-55" />
            </figure>
            <h2 className="mb-2 font-bold">HF X BURNA SLEEVLESS TEE</h2>
            <p className="mb-3">$208.96 USD</p>
            <p className="mb-3">Available in 3 colors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
