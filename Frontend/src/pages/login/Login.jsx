import { useState } from "react";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  return (
    <section className="main bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "user/login",
              payload: userInfo,
            });
          }}
        >
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
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
