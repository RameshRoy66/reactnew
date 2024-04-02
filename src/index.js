import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Nopage from './pages/nopage';
import Page1 from './pages/nrmlpages/page1';
import 'swiper/css';
//admindashboard
import Adminhome from './admindashboard/pages/adminhome';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/about",
    element:<About/>,
      // children:[
      //   {
      //   path:"/page1",
      //   element:<Page1/>,
      //   },
      // ],
  },
  {
    path: "/services",
    element:<Services/>,
  },

  {
    path: "/contact",
    element:<Contact/>,
  },
 

  {
    path: "*",
    element:<Nopage/>,
  },

  
  {
    path: "/services/page1",
    element:<Page1/>,
  },

  {
    path: "/adminhome",
    element:<Adminhome/>,
  },



]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
