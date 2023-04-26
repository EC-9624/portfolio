import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className='App'>
      <About></About>
      <Projects></Projects>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
