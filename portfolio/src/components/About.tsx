function About() {
    return (
        <section className="about">
            <div className="about-image">
                <img src="/profile.png" alt="Malwina Czajka" />
            </div>

            <div className="about-text">
                <p className="section-title">About Me</p>

                <h2>Aspiring Full-Stack Developer</h2>

                <p>
                    I'm an Information Technology student passionate about building modern,
                    user-friendly web applications. I enjoy working with frontend and
                    backend technologies and creating projects that solve real problems.
                </p>

                <p>
                    Recently I've been working with React, TypeScript, C#, .NET,
                    PostgreSQL and Supabase while building business and personal projects.
                </p>

                <div className="tech-stack">
                    <span>React</span>
                    <span>Typescript</span>
                    <span>C#</span>
                    <span>.NET</span>
                    <span>PostgreSQL</span>
                    <span>Java</span>
                </div>
            </div>
        </section>
    );
}

export default About;