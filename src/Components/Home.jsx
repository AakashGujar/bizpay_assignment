/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../Context/Context";

const Home = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <main className="home">
      <div className="container">
        <div className="item">
          <span>
            On opening sidebar, click outside of window for closing it
          </span>
        </div>
        <div className="item">Toggle to open sidebar on left-top</div>
      </div>
    </main>
  );
};

export default Home;
