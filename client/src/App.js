import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopCategory from "./pages/ShopCategory";
import men_banner from "./components/Layout/Assets/banner_mens.png";
import women_banner from "./components/Layout/Assets/banner_women.png";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/men"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
