import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import ReactDOM from 'react-dom/client';
import Resturant from "./components/Resturant";



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
};

const  appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    
    ],
  },
  
]);

const root=ReactDOM.createRoot(document.getElementById('root'))
//root.render(<App/>)
root.render(<RouterProvider router={appRouter}/>)
//export default App;