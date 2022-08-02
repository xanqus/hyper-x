import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { validCheck } from "../../utils/JwtUtil";
import Login from "../Login";
import { authenticatedState } from "../recoil/store";

const AuthRoutes = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  // useEffect(() => {
  //   const jwt = localStorage.getItem("login-token");
  //   if (!validCheck(jwt)) {
  //     setAuthenticated(false);
  //     localStorage.removeItem("login-token");
  //   } else {
  //     setAuthenticated(true);
  //   }
  // }, [setAuthenticated]);

  return authenticated ? <Outlet /> : <Login />;
};
export default AuthRoutes;
