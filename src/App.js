import "./App.css";
import Devices from "./compoments/devices/Devices";
import Header from "./compoments/header/Header";
import Home from "./compoments/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "t";
function App() {
  return (
    <Router>
      <div className="App sm:h-dvh">
        <Header />
        <Routes>
          <Route path="/control" element={<Home />} />
          <Route path="/device" element={<Devices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
