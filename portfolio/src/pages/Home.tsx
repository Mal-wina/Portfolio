import Hero from "../components/Hero";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact.tsx";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
  
      
      <section id="projects">
        <Projects />
      </section>

      <section id="github">
        <GitHubStats />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;