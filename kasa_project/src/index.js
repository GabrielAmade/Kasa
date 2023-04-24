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
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const HeaderFooterLayout = ()=> {
  return <>
    <Navbar />,
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    errorElement: <h1>404 : Page not found</h1>,
    element: <HeaderFooterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/apartment",
        element: <h1>Nos appartements</h1>
      },
      {
        path: "/about",
        element: <h1>À propos</h1>
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
