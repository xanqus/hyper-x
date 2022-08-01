import React from "react";
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Login from "../Login";
import { authenticatedState } from "../recoil/store";

const AuthRoutes = () => {
  let location = useLocation();
  const authenticated = useRecoilValue(authenticatedState);
  console.log(location);
  return authenticated ? <Outlet /> : <Login />;
};
export default AuthRoutes;
