import Hero from "../components/Hero";
import About from "../components/About"
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default Home;