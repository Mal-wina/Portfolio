import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";

function Home() {
  return (
    <>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </>
  );
}

export default Home;