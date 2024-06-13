import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/about";
import Contact from "./components/Contact";
import Cart from "./components/cart";
import Error from "./components/404";
import RestaurantInfo from "./components/restaurant";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

const About = lazy(() => import("./components/about"));

const AppComponent = () => {
  const [userName, setUserName] = useState("Nandu");
  return (
    <Provider store={AppStore}>
    <UserContext.Provider value={{ name: "ammu", setUserName }}>
      <div className="root">
        <Header />
        <UserContext.Provider value={{ name: userName, setUserName }}>
          <Outlet />
        </UserContext.Provider>
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent />);
root.render(<RouterProvider router={router} />);
