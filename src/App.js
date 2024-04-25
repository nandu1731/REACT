import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/about";
import Cart from "./components/cart";
import Error from "./components/404";
import RestaurantInfo from "./components/restaurant";

const About=lazy(()=>import('./components/about'))

const AppComponent = () => {
  return (
    <div className="root">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children:[
      {
        path:'/',
        element:<Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantInfo />
      }
    ],
    errorElement: <Error />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent />);
root.render(<RouterProvider router={router} />);
