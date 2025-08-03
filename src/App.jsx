import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import products from "./data/products";
import ProductDetail from "./pages/ProductDetail";
import FliersPage from "./pages/FliersPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail products={products} />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/fliers" element={<FliersPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
