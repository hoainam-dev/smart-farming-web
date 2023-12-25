import './App.css';
import Home from './views/home-page/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

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
