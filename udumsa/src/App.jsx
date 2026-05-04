import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Upcoming from "./pages/Upcoming/Upcoming";
import News from "./pages/News/News";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">

      <Navbar />   
      <Hero />
      <About />
      <Events />
      <Upcoming />
      <News />
    </main>
  );
};

export default App;