import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector((state) => state.user.isLogged);

  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
