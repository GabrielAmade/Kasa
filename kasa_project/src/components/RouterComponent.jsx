import React from 'react';
import {
  createBrowserRouter,
  Outlet
} from 'react-router-dom';
import HomePage from '../HomePage.js';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import ApartmentPage from './apartment_page/ApartmentPage';
import ErrorPage from './error_page/ErrorPage';
import About from './about_page/About';

const HeaderFooterLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      element: <HeaderFooterLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/apartment/:id',
          element: <ApartmentPage />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/error',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  export default router;
