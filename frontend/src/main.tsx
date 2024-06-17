import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About.js';
import Book from './pages/Book.js';
import Taim from './pages/Taim.js';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
  },
  {
    path : '/about',
    element : <About/>,
  },
  {
    path : '/aim',
    element : <Taim/>,
  },
  {
    path : '/books',
    element : <Book/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
