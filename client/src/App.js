import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/enter"
          element={
            <>
              <Nav />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
