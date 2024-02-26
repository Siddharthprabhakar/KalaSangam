import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Home } from './Component/LandingPage/Home.jsx';
import { AboutUs } from './Component/AboutUs/AboutUs.jsx';
import { App } from './App.jsx';

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
