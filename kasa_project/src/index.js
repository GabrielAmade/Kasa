import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import ApartmentPage from './components/apartment_page/ApartmentPage';
import ErrorPage from './components/error_page/ErrorPage';
import About from './components/about/About'

const HeaderFooterLayout = ()=> {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage/>,
    element: <HeaderFooterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/apartment/:id",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

