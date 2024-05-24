import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const online = useOnlineStatus();

  const { name } = useContext(UserContext);

  const handleLoginStatus = () => {
    if (loginStatus === "Login") {
      setLoginStatus("LogOut");
    } else {
      setLoginStatus("Login");
    }
  };

  return (
    <div className="flex justify-between flex-wrap items-center bg-green-200 p-1 md:bg-lime-200">
      <div className="p-1">
        <img className="w-40 h-30" src={LOGO_URL} />
      </div>

      <div className="m-5">
        <ul className="flex flex-wrap items-center">
          <li className="px-5 text-lg font-medium">
            {online ? "Online" : "Offline"}
          </li>
          <li className="px-5 text-lg font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 text-lg font-medium">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-5 text-lg font-medium">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-5 text-lg font-medium">
            <p>{name}</p>
          </li>
          <li
            className="px-5 py-2 text-lg font-medium bg-slate-100 rounded-md cursor-pointer"
            onClick={handleLoginStatus}
          >
            {loginStatus}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
