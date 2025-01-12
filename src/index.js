import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './App';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import AuthContextProvider from './contexts/authContext';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ToastContainer />
    <RouterProvider router={router} />
  </AuthContextProvider>
);
