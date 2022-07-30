import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const doLogin = async (e) => {
    //e.preventDefault();
    const data = await axios({
      method: "post",
      url: "http://localhost:8287/login",
      data: {
        username: "xanqus",
        password: "1234",
      },
    });

    console.log("data", data);
  };
  useEffect(() => {
    doLogin();
  }, []);
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="ID" />
        <input type="text" placeholder="PASSWORD" />
        <button onSubmit={doLogin}>로그인</button>
      </form>
    </div>
  );
};

export default Login;
