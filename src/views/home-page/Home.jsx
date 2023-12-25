import Header from "./header/Header";
import "./Home.css";
import Content from "./content/Content";

function Home() {
  return (
    <div className="container">
      <div className="frame">
        <Header className="header" />
        <Content/>
      </div>
    </div>
  );
}

export default Home;
