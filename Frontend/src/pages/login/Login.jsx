import { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByEmail } from "../../app/store/features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const statusMessage = useSelector((state) => state.user.statusMessage);

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(fetchUserByEmail(userInfo));
    navigate("/profile");
  };

  return (
    <section className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
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
          {statusMessage}
        </form>
      </div>
    </section>
  );
};

export default Login;
