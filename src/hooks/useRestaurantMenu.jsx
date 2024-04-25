import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    // console.log(resId);
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4322123&lng=78.3963095&restaurantId=${resId}`
    );
    const data = await response.json();
    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;
