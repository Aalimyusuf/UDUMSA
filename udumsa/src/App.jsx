import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Upcoming from "./pages/Upcoming/Upcoming";
import News from "./pages/News/News";
import Testimonials from "./pages/Testimonials/Testimonials";
import Questions from "./pages/Questions/Questions";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">

      <Navbar />   
      <Hero />
      <About />
      <Events />
      <Upcoming />
      <News />
      <Testimonials />
      <Questions />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;