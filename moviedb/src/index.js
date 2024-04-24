import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/css/index.css';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header>
    <RouterProvider router={router} />
  </Header>
);
