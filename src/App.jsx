import "./App.css";
import About from "./Components/About/About";
import Destination from "./Components/Destination/Destination";
import Gallery from "./Components/Gallery/Gallery";
import Home from "./Components/Pages/Home";
import SinglePage from "./SinglePage/SinglePage";
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
          <Route path="/destination" exact element={<Destination />} />
          <Route path="/SinglePage/:id" exact element={<SinglePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
