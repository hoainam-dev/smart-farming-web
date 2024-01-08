import "./Home.css";
import Content from "../content/Content";
// import { useState } from "react";
// import Tab from "../tab/Tab";
function Home() {
  const userName = localStorage.getItem("user");
  
  return (
    <div className="mx-auto flex justify-center items-center">
      <div className="rounded-lg border-solid border-2 border-white my-5 frame w-auto">
        {!userName ? (
          ""
        ) : (
          <Content/>
        )}
      </div>
    </div>
  );
}

export default Home;
