import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const online = useOnlineStatus();

  const handleLoginStatus = () => {
    if (loginStatus === "Login") {
      setLoginStatus("LogOut");
    } else {
      setLoginStatus("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>

      <div className="links">
        <ul>
          <li>{online ? "online" : "offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li onClick={handleLoginStatus}>{loginStatus}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
