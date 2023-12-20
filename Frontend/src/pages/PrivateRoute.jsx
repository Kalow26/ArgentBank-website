import { useSelector } from "react-redux";
import Error404 from "./error404/Error404";

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector((state) => state.user.isLogged);

  if (isLogged) {
    return children;
  } else {
    return <Error404 />;
  }
};
