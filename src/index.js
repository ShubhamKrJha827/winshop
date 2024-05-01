import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Container from './Components/Container';
import About from './Components/About/About';
import Exhibitor from './Components/Exhibitor/Exhibitor';
import Visitor from './Components/Visitor/Visitor';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Container/>
      },
      {
        path: "/home",
        element: <Container/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/exhibitor",
        element:<Exhibitor/>
      },
      {
        path: "/visitor",
        element:<Visitor/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
    ]
  }
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
