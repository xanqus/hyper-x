import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authenticatedState } from "./recoil/store";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  const onChangeIdInput = (e) => {
    setUserId(e.target.value);
  };
  const onChnagePasswordInput = (e) => {
    setUserPassword(e.target.value);
  };

  const doLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        method: "post",
        url: "http://localhost:8287/login",
        data: {
          username: userId,
          password: userPassword,
        },
      });

      if (data.headers.authorization) {
        setAuthenticated(true);
        localStorage.setItem("login-token", data.headers.authorization);
      }
    } catch (e) {
      console.log(e);
      alert("로그인 실패");
    }
  };
  if (localStorage.getItem("login-token")) {
    navigate("/");
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={doLogin}>
        <input
          type="text"
          placeholder="ID"
          value={userId}
          onChange={onChangeIdInput}
        />
        <input
          type="text"
          placeholder="PASSWORD"
          value={userPassword}
          onChange={onChnagePasswordInput}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
