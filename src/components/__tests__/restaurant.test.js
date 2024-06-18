import { screen, render } from "@testing-library/react";
import RestaurantCard from "../Restaurants";
import { mockObj } from "../../mockData/mockResObj";
import "@testing-library/jest-dom";
import { NearestRestaurantCard } from "../Restaurants";

it("should load restaurant card with props", () => {
  render(<RestaurantCard resInfo={mockObj} />);
  const resName = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(resName).toBeInTheDocument();
});

it("should load restaurant card with nearest label", () => {
  const PromotedComponent = NearestRestaurantCard(RestaurantCard);
  render(
    mockObj?.sla?.deliveryTime < 30 ? (
      <PromotedComponent resInfo={mockObj} />
    ) : (
      <RestaurantCard resInfo={mockObj} />
    )
  );
  const nearest = screen.getByText("Nearest");
  expect(nearest).toBeInTheDocument();
});
