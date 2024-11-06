import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Errorpage from './components/Errorpage/Errorpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Errorpage/>
  },
  {
    path: "/Users",
    element: <Users/>,
    errorElement: <Errorpage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
