import Header from "../header/Header";
import background from "../../assets/images/background.jpg";
import "./Home.css";

function Home({prop}){
      return (
        <div className="container">
          <div className="frame">
            <Header/>
          </div>
        </div>
      );
}

export default Home;