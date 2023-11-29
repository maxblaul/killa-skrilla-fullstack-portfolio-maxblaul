import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from '../components/About/index.jsx';
import Portfolio from '../components/Portfolio/index.jsx';
import Resume from '../components/Resume/index.jsx';
import Contact from '../components/Contact/index.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);