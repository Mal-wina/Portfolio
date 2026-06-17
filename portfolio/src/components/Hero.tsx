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
          <a href="/#projects" className="primary-btn">
            View My Work
          </a>
          <a href="/cv.pdf" download className="download-btn">
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/public/profilepic.webp" alt="Malwina Czajka" />
      </div>
    </section>
  );
}

export default Hero;