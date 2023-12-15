import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStorage } from "../utils/getStorage";
import { logout } from "../app/store/features/userSlice";

const NavbarLogged = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    const storage = getStorage();
    storage.removeItem("token");
    dispatch(logout());
  };

  return (
    <>
      <NavLink className="main-nav_item" to="/profile">
        <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
        {state.userInfo.userName}
      </NavLink>
      <NavLink className="main-nav_item" to="/" onClick={() => handleLogout()}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="fontawesome-icon"
        />
        Sign Out
      </NavLink>
    </>
  );
};

export default NavbarLogged;
