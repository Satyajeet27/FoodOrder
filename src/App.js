import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ReactDOM from 'react-dom/client';
import Resturant from "./components/Resturant";



export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

