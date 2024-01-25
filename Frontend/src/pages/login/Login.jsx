import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleStatutMessage } from "../../app/store/features/userSlice";
import {
  fetchUserByEmail,
  getUserProfile,
} from "../../app/store/userThunks/userThunks";
import { getStorage } from "../../utils/getStorage";
import "./login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const statusMessage = useSelector((state) => state.user.statusMessage);
  const isLogged = useSelector((state) => state.user.isLogged);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      const storage = getStorage();
      const token = storage.getItem("token");
      dispatch(getUserProfile(token));
      navigate("/profile");
    }
  }, [isLogged, dispatch, navigate]);

  useEffect(() => {
    if (statusMessage) {
      setTimeout(() => {
        dispatch(handleStatutMessage());
      }, 1800);
    }
  }, [dispatch, statusMessage]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(fetchUserByEmail(userInfo));
  };

  return (
    <section className="main bg-dark">
      <div className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
        <h1>Sign In</h1>
        <form onSubmit={submitForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={() =>
                setUserInfo({ ...userInfo, rememberMe: !userInfo.rememberMe })
              }
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <span className="status-message">{statusMessage}</span>
        </form>
      </div>
    </section>
  );
};

export default Login;
