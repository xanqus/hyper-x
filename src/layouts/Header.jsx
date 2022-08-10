import React from "react";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/store";
import { Link } from "react-router-dom";

const Header = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  return (
    <header className="w-full shadow">
      <nav className="flex w-full fixed top-0 h-16 border-b-2 border-gray-300 justify-between md:">
        <div className="flex flex-shrink justify-center w-24">
          <Link to="/">
            <div className="flex w-16 justify-center items-center h-full bg-red-500">
              HYPER-X
            </div>
          </Link>
        </div>

        <div className="flex flex-row">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/users">Users</Link>
          </div>
        </div>

        <div className="w-72 bg-red-500">
          <div>
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
              <div className="flex flex-row w-full">
                <div className="w-1/2 bg-yellow-500">
                  <Link to="/login">로그인</Link>
                </div>
                <div className="w-1/2">
                  <Link to="/join">회원가입</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
