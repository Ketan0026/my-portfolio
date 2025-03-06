import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tape />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;