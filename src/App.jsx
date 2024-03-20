import "./App.css";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Home from "./Components/Pages/Home";
import Navbar from "./common/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/gallery" exact element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
