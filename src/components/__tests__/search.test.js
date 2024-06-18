import "@testing-library/jest-dom";
import Body from "../Body";
// import {act} from 'react-dom/test-utils';
import { render, screen, waitFor } from "@testing-library/react";
import { allResData } from "../../mockData/mockAllResObj";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(allResData);
    },
  });
});

it("should load body component with search button", async () => {
//   render(<Body />);
//   const searchBtn = await waitFor(() => {
//     screen.getByTestId("Search");
//   });
//   console.log(searchBtn);
});
