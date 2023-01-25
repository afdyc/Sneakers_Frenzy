import React from "react";
// import UserContext from "./App";
// import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";

// const useAuth = () => {
//   const { user } = useContext(UserContext);
//   return user && user.loggedIn;
// };

const ProtectedRoute = () => {
  const userLoggedin = localStorage.getItem("username");
  const passLoggedin = localStorage.getItem("password");
  const location = useLocation();
  // const isAuth = useAuth();

  return userLoggedin && passLoggedin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
