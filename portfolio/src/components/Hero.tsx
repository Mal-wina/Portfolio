function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="hero-text">
        <h1>Hi, I'm Malwina Czajka</h1>
        <h2>Aspiring Software Developer</h2>
        </p>
        <p>
          I build clean, functional and user-friendly web applications using modern technologies.
        </p>

        <div className="buttons">
          <button>View My Work</button>
          <button className="secondary">Download CV</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/public/profile.png" alt="Malwina Czajka" />
      </div>
    </section>
  );
}

export default Hero;