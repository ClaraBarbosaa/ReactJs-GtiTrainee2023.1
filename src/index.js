import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Catalog from './Components/Catalog';

//const router = createBrowserRouter([
  //{
    //path: "/",
    //element: <> <Home/><About/><Work/><Contact/><Footer/> </>
  //},

  //{
    //path: "catalogo",
    //element: <Catalog />,
  //},
//]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Home/><About/><Work/><Contact/><Footer/> </>,
  },
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "catalog",
        element: <Catalog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


