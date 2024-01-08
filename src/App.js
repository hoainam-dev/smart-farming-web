import "./App.css";
import SignIn from "./compoments/auth/SignIn";
import Devices from "./compoments/devices/Devices";
import Header from "./compoments/header/Header";
import Home from "./compoments/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "t";
function App() {
  const userName = localStorage.getItem("user");
  return (
    <Router>
      <div className="App sm:h-dvh ">
        <Header userName={userName}/>
        <Routes>
          <Route path="/control" element={<Home />} />
          <Route path="/device" element={<Devices />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
