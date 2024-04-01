import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
