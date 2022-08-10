import React from "react";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/store";
import { Link } from "react-router-dom";

const Header = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  return (
    <header>
      {authenticated ? (
        <Link
          to="/"
          onClick={() => {
            setAuthenticated(false);
          }}
        >
          로그아웃
        </Link>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </header>
  );
};

export default Header;
