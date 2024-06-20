import "./styles.scss";
import MenuIcon from "./../../assets/menus.png";
const Header = () => {
  return (
    <div className="wrapper">
      <div className="m-wrapper">
        <img className="menu-icon" src={MenuIcon} alt="menu-icon" />
      </div>
      <div className="header-container">
        <div className="container">
          <span className="icon-container">CB</span>
          <span className="text-container">Cloudbankin</span>
        </div>
        <div className="container">
          <span className="user-icon-container">TU</span>
          <span className="user-name-container">Test user</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
