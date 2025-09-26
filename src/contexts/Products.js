import image1 from "../assets/IMG_4215-scaled_a9ee11c2-7283-4bee-9482-b464ff1f2879.webp";
import image2 from "../assets/oct8_1.webp";
import image3 from "../assets/homepage-1.png";
import image4 from "../assets/IMG_7630.webp"

const productsNoID = [
  {
    title: "HF X BURNA SLEEVELESS TEE",
    price: 208.96,
    stock: 25,
    image: image1,
  },
  {
    title: "HF X SWEAT PUNK",
    price: 260.96,
    stock: 15,
    image: image4,
  },
  {
    title: "HF X BURNA SLEEVELESS TEE",
    price: 250.00,
    stock: 17,
    image: image2,
  },
  {
    title: "HF X BURNA SLEEVELESS TEE",
    price: 320.00,
    stock: 12,
    image: image3,
  },
  {
    title: "HF X BURNA SLEEVELESS TEE",
    price: 208.96,
    stock: 22,
    image: image1,
  },
  {
    title: "HF X BURNA SLEEVELESS TEE",
    price: 208.96,
    stock: 14,
    image: image1,
  },
  {
    title: "HF X BURNA SLEEVELESS TEE",
    price: 208.96,
    stock: 18,
    image: image1,
  },
  {
    title: "Classic Blazer",
    price: 65,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=700&auto=format&fit=crop&q=60",
  },
  {
    title: "Summer Dress",
    price: 45,
    stock: 19,
    image:
      "https://images.unsplash.com/photo-1582738509941-360b28c941ea?w=700&auto=format&fit=crop&q=60",
  },
  {
    title: "Nasibo",
    price: 55,
    stock: 26,
    image:
      "https://images.unsplash.com/photo-1734944688893-3cb02d71fb3d?w=700&auto=format&fit=crop&q=60",
  },
  {
    title: "Black Tee",
    price: 55,
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=60",
  },
  {
    title: "Denim Jacket",
    price: 55,
    stock: 75,
    image:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=300&auto=format&fit=crop&q=60",
  },
  {
    title: "Felipe Ditadi",
    price: 55,
    stock: 32,
    image:
      "https://plus.unsplash.com/premium_photo-1725914369094-a08e222ce681?w=700&auto=format&fit=crop&q=60",
  },
  {
    title: "Women beautiful heel",
    price: 55,
    stock: 21,
    image:
      "https://images.unsplash.com/photo-1596702876489-9d11e5806161?w=700&auto=format&fit=crop&q=60",
  },
  {
    title: "Denim Jacket 2",
    price: 55,
    stock: 51,
    image:
      "https://images.unsplash.com/photo-1614693348454-1e0710d21c60?w=700&auto=format&fit=crop&q=60",
  },
];

export const products = productsNoID.map((product, index) => {
  return {...product, id: `${index+1}`}
})

export const images = [image1, image2, image3, image4];
