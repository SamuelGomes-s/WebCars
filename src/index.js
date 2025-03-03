import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './App';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import AuthContextProvider from './contexts/authContext';
import { ToastContainer } from 'react-toastify';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ToastContainer />
    <RouterProvider router={router} />
  </AuthContextProvider>
);
