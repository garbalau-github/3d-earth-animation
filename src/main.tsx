import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';

const documentElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(documentElement).render(
  <React.StrictMode>
    <Toaster position='top-center' reverseOrder={false} />
    <App />
  </React.StrictMode>
);
