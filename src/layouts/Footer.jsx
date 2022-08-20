import React from "react";
import ServiceList from "../components/layouts/footer/ServiceList";

const Footer = () => {
  return (
    <footer>
      <div
        className="flex justify-center h-112"
        style={{ backgroundColor: "#303740" }}
      >
        <div className="max-w-6xl w-full">
          <ServiceList />
          <div className="flex h-2/5">
            <div
              className="flex flex-col flex-grow flex-shrink-0 justify-around h-full p-5"
              style={{ color: "#929a9d" }}
            >
              <div className="mb-auto mt-2">
                HYPER | 개인정보취급방침 | 이용약관
              </div>
              <ul className="text-xs whitespace-nowrap">
                <li className="sm:whitespace-nowrap">
                  (주)HYPER | 대표자: 김범수 | 사업자번호: 499-81-00612 사업자
                  정보 확인
                </li>
                <li>
                  통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 |
                  이메일: info@inflearn.com
                </li>
                <li>
                  주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동
                  405호
                </li>
                <li className="mt-3">©INFLAB. ALL RIGHTS RESERVED</li>
              </ul>
            </div>
            <div className="w-1/3 flex-shrink h-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
