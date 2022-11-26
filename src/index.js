import React from 'react';
import App from './App.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext.js';

const root = ReactDOM.createRoot(document.getElementById("app"))

root.render (
  <UserContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserContextProvider>
)

