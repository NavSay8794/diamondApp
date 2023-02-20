import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavbarComponent";

//importing the pages
import Home from "./components/Home";
import Ornaments from "./components/Ornaments";
import About from "./components/AboutComponent";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container" id="contentDiv">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ornaments" element={<Ornaments />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
