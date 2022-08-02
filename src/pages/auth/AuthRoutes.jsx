import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import Login from "../Login";
import { authenticatedState } from "../recoil/store";

const AuthRoutes = () => {
  const authenticated = useRecoilValue(authenticatedState);
  const resetAuthenticated = useResetRecoilState(authenticatedState);
  useEffect(() => {
    const validCheck = (token) => {
      try {
        const pureToken = token.split(" ")[1];
        const payload = JSON.parse(window.atob(pureToken.split(".")[1]));
        if (payload.exp * 1000 > Date.now()) {
          return;
        }
        resetAuthenticated();
      } catch (e) {
        console.log(e);
      }
    };
    const jwt = localStorage.getItem("login-token");
    validCheck(jwt);
  }, [resetAuthenticated]);

  return authenticated ? <Outlet /> : <Login />;
};
export default AuthRoutes;
