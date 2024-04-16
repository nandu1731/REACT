import React, { useEffect, useState } from "react";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async() => {
    const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4322123&lng=78.3963095&restaurantId=377795');
    const data=await response.json();
    setResInfo(data);
  };

  const menu= resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (<div>
    <p>
        name
    </p>
    {resInfo?.map((item)=>(
        <li key={item?.}></li>
    ))}
  </div>);
};

export default RestaurantInfo;
