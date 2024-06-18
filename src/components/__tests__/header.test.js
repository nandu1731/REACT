import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";

it("should load login button in header", () => {
  render(
    <BrowserRouter>
      {" "}
      {/* rendering this beacuse of Link tag */}
      <Provider store={AppStore}>
        {" "}
        {/* rendering because we are using react redux store*/}
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByText("Login");
  //   const login = screen.getByRole("button",{name:'Login'});
  fireEvent.click(login);
  const logout = screen.getByText("LogOut");

  expect(logout).toBeInTheDocument();
});

it("should load login with cart", () => {
  render(
    <BrowserRouter>
      {" "}
      {/* rendering this beacuse of Link tag */}
      <Provider store={AppStore}>
        {" "}
        {/* rendering because we are using react redux store*/}
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByText(/Cart/);
  expect(login).toBeInTheDocument();
});

// it("should load login with 0 cart items", () => {
//   render(
//     <BrowserRouter>
//       {" "}
//       {/* rendering this beacuse of Link tag */}
//       <Provider store={AppStore}>
//         {" "}
//         {/* rendering because we are using react redux store*/}
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const emptyCart = screen.getByText("(Cart -0 items)");
//   expect(emptyCart).toBeInTheDocument();
// });

