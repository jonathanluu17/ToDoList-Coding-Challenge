import React from 'react';
import App from './App.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("app"))

root.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

