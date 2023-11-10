import React from "react";
import ReactDOM from "react-dom/client";
import FarmCards from "./Bodycomponent/FarmCards.js";
 import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
 import Header from"./Header component/Header.js"
 import Navbar from  "./Header component/Navbar.js"
 import About from "./Header component/About.js";
 import Footer from "./Footer component/Footer.js";
 import Contact from "./Header component/Contact.js";
 import Products from  "./Header component/Products.js"
 import FarmCards from "./Bodycomponent/FarmCards.js";
 import Searchbar from "./Header component/Searchbar.js";



var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

function AppLayout() {
  return (
    <div >
  <Header/>
    <Navbar/>
    <Searchbar/>
      <Outlet/>
  <Footer/> 
    </div>
  )
}


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
      path: "/Home",
      element: <FarmCards/>
    },
      {
      path: "/Contact",
      element: <Contact/>
    },
    {
      path: "/About",
      element: <About/>
    },
    {
      path: "/Products",
      element: <Products />
    }
    ]
  }
])

rootReact.render(<RouterProvider router={AppRouter} />);




