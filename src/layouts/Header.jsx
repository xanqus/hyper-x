import React from "react";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/store";
import { Link } from "react-router-dom";

const Header = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  return (
    <header className="flex justify-center items-start shadow">
      <div className="navbar fixed h-20 bg-base-100 flex justify-center z-10">
        <div className="max-w-6xl w-full">
          <div className="navbar-start flex w-1/3 lg:w-full">
            <div className="hidden lg:flex">
              <div className="py-3 w-16 mx-2">
                <div className="flex justify-center text-gray-400 hover:text-green-300">
                  <Link className="" to="/">
                    강의
                  </Link>
                </div>
              </div>
              <div className="py-3 w-16 mx-2">
                <div className="flex justify-center text-gray-400 hover:text-green-300">
                  <Link className="" to="/">
                    로드맵
                  </Link>
                </div>
              </div>
              <div className="py-3 w-16 mx-2">
                <div className="flex justify-center text-gray-400 hover:text-green-300">
                  <Link className="" to="/">
                    멘토링
                  </Link>
                </div>
              </div>
              <div className="py-3 w-16 mx-2">
                <div className="flex justify-center text-gray-400 hover:text-green-300">
                  <Link className="" to="/">
                    커뮤니티
                  </Link>
                </div>
              </div>
              <div className="py-3 w-16 mx-2">
                <div className="flex justify-center text-gray-400 hover:text-green-300">
                  <Link className="" to="/">
                    HYPER
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button className="btn btn-ghost btn-circle hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="navbar-center flex flex-1 justify-center w-32 lg:order-first">
            <a
              href="#!"
              className="btn btn-ghost normal-case text-xl hover:bg-transparent"
            >
              HYPER
            </a>
          </div>
          <div className="navbar-end flex grow-0 justify-end w-1/3">
            <div className="w-2/5 hidden lg:flex">
              <button v="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="btn btn-ghost btn-circle z">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
            <div className="flex lg:w-3/5 w-full">
              <div className="w-full">
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
                  <div className="flex flex-row w-full h-full justify-end items-center">
                    <div className="lg:w-12 lg:btn-sm lg:rounded-md w-10 btn-xs text-xs btn btn-ghost btn-outline rounded whitespace-nowrap mx-1 lg:m-auto border-none hover:bg-transparent hover:text-gray-500">
                      <Link to="/login">로그인</Link>
                    </div>
                    <div className="lg:w-16 lg:btn-sm lg:rounded lg:px-10 btn btn-primary btn-xs text-xs rounded whitespace-nowrap mx-1 lg:m-auto bg-red-400 border-none hover:bg-red-500">
                      <Link to="/join">회원가입</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
