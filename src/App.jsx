import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle";
import Contact from "./Components/Contact/Contact";
import Destination from "./Components/Destination/Destination";
import Gallery from "./Components/Gallery/Gallery";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Home from "./Components/Pages/Home";
import Testimonial from "./Components/Testimonial/Testimonial";
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
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blogsingle/:id" exact element={<BlogSingle />} />
          <Route path="/testimonial" exact element={<Testimonial />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/sign-in" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
