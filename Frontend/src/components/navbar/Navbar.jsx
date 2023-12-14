import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getStorage } from "../../utils/getStorage";
import { logout } from "../../app/store/features/userSlice";

const Navbar = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    const storage = getStorage();
    storage.removeItem("token");
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {state.isLogged ? (
          <>
            <NavLink className="main-nav_item" to="/profile">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="fontawesome-icon"
              />
              {state.userInfo.firstName}
            </NavLink>
            <NavLink
              className="main-nav_item"
              to="/"
              onClick={() => handleLogout()}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="fontawesome-icon"
              />
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
