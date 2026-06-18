function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Malwina <span>Czajka</span>
        </h1>

        <h2>Software Developer</h2>

        <p className="hero-description">
          I build clean, functional and user-focused web applications using
          modern technologies.
        </p>

        <div className="buttons">
          <a href="/#projects" className="btn">
            View My Work
          </a>

          <a href="/cv.pdf" download className="btn btn-outline">
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/profilepic.webp" alt="Malwina Czajka" />
      </div>
    </section>
  );
}

export default Hero;