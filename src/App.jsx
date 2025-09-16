import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ClientLayout from "./Layouts/ClientLayout";
import AllProductsPage from "./pages/AllProductsPage";

const App = () => {
  return (
    <div className="app">
      <ClientLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
        </Routes>
      </ClientLayout>
    </div>
  );
}

export default App;
