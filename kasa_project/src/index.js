import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
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
        path: "/apartment",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
