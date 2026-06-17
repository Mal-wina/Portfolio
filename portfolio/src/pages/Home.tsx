import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
  
      
      <section id="projects">
        <Projects />
      </section>

      

      <section id="skills">
        <Skills />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;