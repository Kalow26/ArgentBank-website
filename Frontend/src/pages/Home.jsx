import React, { useEffect } from "react";
import Hero from "../containers/Hero/Hero";
import Features from "../containers/Features/Features";
import { getStorage } from "../utils/getStorage";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../app/store/features/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = getStorage();
    if (storage.length > 0) {
      const token = storage.getItem("token");
      dispatch(getUserProfile(token));
    }
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default Home;
