import "./App.css";
import Home from "./compoments/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "t";
function App() {
  return (
      <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
