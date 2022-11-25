import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
//elimino el react strict mode pq cada vez que renderiza lee un array vacio y lo establece
//instalamos react-router-dom, importamos BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


