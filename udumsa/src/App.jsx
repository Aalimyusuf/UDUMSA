import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">

      <Navbar />   
      <Hero />
    </main>
  );
};

export default App;