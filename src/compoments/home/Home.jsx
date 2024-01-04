import Header from "../header/Header";
import "./Home.css";
import Content from "../content/Content";
function Home() {
  return (
    <div className="container mx-auto flex justify-center ">
      <div className="rounded-lg border-solid border-2 border-white my-5 frame w-auto" >
        <Header />
        <Content/>
      </div>
    </div>
  );
}

export default Home;
