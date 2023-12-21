import logo from './logo.svg';
import './App.css';
import Home from './component/home/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './component/header/Header';

function App() {
  return (
    <Router>
    <div className="App"> 
      <Routes>
        <Route path="/home" element={<Home prop={"Hoang po`"}/>}/>
      </Routes>
    </div>
    {/* <Footer/> */}
  </Router>
  );
}

export default App;
