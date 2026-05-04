import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">

      <Navbar />   
      <Hero />
      <About />
    </main>
  );
};

export default App;