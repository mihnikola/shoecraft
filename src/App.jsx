import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { Footer } from "./sections";
import { ShopCartProvider } from "./context/ShopContext";
import BuyComponent from "./components/BuyComponent";

const App = () => {
  return (
    <ShopCartProvider>
      <BrowserRouter>
        <main className='relative'>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<BuyComponent />} />
          </Routes>
          <section className=' bg-black padding-x padding-t pb-8'>
            <Footer />
          </section>
        </main>
      </BrowserRouter>
    </ShopCartProvider>
  );
};

export default App;
