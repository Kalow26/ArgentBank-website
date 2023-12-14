import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Router } from "../routes/Router";
import "../app/index.css";
import { getUserProfile } from "./store/features/userSlice";
import { getStorage } from "../utils/getStorage";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = getStorage();
    if (storage.length > 0) {
      const token = storage.getItem("token");
      dispatch(getUserProfile(token));
    }
  }, [dispatch]);

  return <RouterProvider router={Router} />;
}

export default App;
