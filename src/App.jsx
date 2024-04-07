import { Routes, Route, useLocation } from 'react-router-dom';
import { AboutUs } from './Component/AboutUs/AboutUs';
import { EndSection } from './Component/Footer/EndSection';
import { Home } from './Component/LandingPage/Home';
import { Header } from './Component/NavBar/Header';
import { LoginForm } from './Component/LoginRegister/LoginForm';
import { Profile } from './Component/Profile/Profile';
import { ProductPage } from './Component/Products/ProductPage';
import { AllProducts } from './Component/Products/MainProducts/AllProducts';
import { SellNavbar } from './Component/SellYourProduct/SellNavbar/SellNavbar';
import SellProfile from './Component/SellYourProduct/SellProfile/SellProfile';
import { ProductForm } from './Component/SellYourProduct/ProductForm/ProductForm';
import { SellCreation } from './Component/SellYourProduct/SellCreation/SellCreation.jsx';
import { Cart } from './Component/Products/ProductCart/Cart.jsx';
import { ProductDetails } from './Component/Products/ProductDetails/ProductDetails.jsx';

export function App() {
  const location = useLocation();
  const isAboutUsPage = location.pathname === '/aboutus';
  const isLoginPage = location.pathname === '/login';
  const isProductCart = location.pathname === '/product-cart';
  const isSellerRoute = location.pathname.includes('/sell-'); // Check if the route path contains '/sell-'

  return (
    <>
        {!isLoginPage && !isSellerRoute && <Header />} {/* Render user navbar */}
        {isSellerRoute && <SellNavbar />} {/* Render seller navbar for seller routes */}
        <div className="App">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/sell-profile" element={<SellProfile />} />
            <Route path="/sell-product-form" element={<ProductForm />} />
            <Route path="/sell-creation" element={<SellCreation />} />
            <Route path="/product-cart" element={<Cart />} />
            <Route path="/productdetail" element={<ProductDetails />} />
          </Routes>
        </div>
        {!isAboutUsPage && !isLoginPage && !isSellerRoute && !isProductCart && <EndSection />}
    </>
  );
}
