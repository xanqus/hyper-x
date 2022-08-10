import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ height: "1000px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
