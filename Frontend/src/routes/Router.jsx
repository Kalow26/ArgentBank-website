import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import { Layout } from "./Layout";
import Profile from "../pages/profile/Profile";
import { PrivateRoute } from "../pages/PrivateRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Erreur</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
