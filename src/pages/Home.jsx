import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default Home;
