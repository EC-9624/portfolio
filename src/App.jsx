import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
