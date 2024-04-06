import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Home } from './Component/LandingPage/Home.jsx';
import { AboutUs } from './Component/AboutUs/AboutUs.jsx';
import { App } from './App.jsx';
import { LoginForm } from './Component/LoginRegister/LoginForm.jsx';
import { Profile } from './Component/Profile/Profile.jsx';
import { ProductPage } from './Component/Products/ProductPage.jsx';
import { AllProducts } from './Component/Products/MainProducts/AllProducts.jsx';
import { ProductForm } from './Component/SellYourProduct/ProductForm/ProductForm.jsx';
import SellProfile from './Component/SellYourProduct/SellProfile/SellProfile.jsx';
import { SellCreation } from './Component/SellYourProduct/SellCreation/SellCreation.jsx';
import { ProductDetails } from './Component/Products/ProductDetails/ProductDetails.jsx';
import { Cart } from './Component/Products/ProductCart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/product',
        element: <ProductPage />,
      },
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/products',
        element: <AllProducts />
      },
      {
        path: '/sell-product-form*', 
        element: <ProductForm />
      },
      {
        path: '/sell-profile',
        element: <SellProfile />
      },
      {
        path: '/sell-creation*',
        element: <SellCreation />
      },
      {
        path: '/product-cart',
        element: <Cart />
      },
      {
        path: '/productdetail',
        element: <ProductDetails />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </RouterProvider>
  </React.StrictMode>,
);
