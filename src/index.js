import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Contact from './components/Contact';
import About from './components/About';
import Body from './components/Body';


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },

    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<App/>)
root.render(<React.StrictMode><RouterProvider router={appRouter} /></React.StrictMode>)
//export default App;