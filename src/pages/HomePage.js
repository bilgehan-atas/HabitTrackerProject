import StartingPageContent from "../components/StartingPage/StartingPageContent";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn, navigate]);

  return <StartingPageContent />;
};

export default HomePage;
