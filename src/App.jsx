import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ClientLayout from "./Layouts/ClientLayout";
import AllProductsPage from "./pages/AllProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import {HamburgerProvider} from "./contexts/HamburgerContext";

const App = () => {
  return (
    <div className="app">
      <HamburgerProvider>
        <ClientLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/allproducts" element={<AllProductsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </ClientLayout>
      </HamburgerProvider>
    </div>
  );
};

export default App;
