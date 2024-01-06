import Header from "../header/Header";
import "./Home.css";
import Content from "../content/Content";
import { useState } from "react";
import Tab from "../tab/Tab";
function Home({ username }) {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="mx-auto flex justify-center ">
      <div className="rounded-lg border-solid border-2 border-white my-5 frame w-auto">
        {!username ? (
          ""
        ) : (
          <div>
            <h1 className="text-2xl text-red-500">{username}</h1>
            <button onClick={logout} className="text-rose-600">
              Logout
            </button>
            <Content />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
