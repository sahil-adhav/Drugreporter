import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import ReadMore from "./components/ReadMore";
import Report from "./components/Report";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <Routes>
        <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/readmore" element={<ReadMore />} />
        </Routes>
        <Footer/>
      </Router>

      {/* <Router>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/readmore">
            <ReadMore />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Routes>
        <Footer/>
      </Router> */}
    </>
  );
}

export default App;
