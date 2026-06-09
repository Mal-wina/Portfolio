function Projects() {
    return (
        <section className="projects-page">
            <p className="section-title">My Work</p>
            <h1>Projects</h1>

            <div className="projects-grid">
                <div className="projects-card">
                    <img src="/business-project.png" alt="Electrician website" />
                    <h2>Electrician Website</h2>
                    <p>
                        Client website with contact form, PostgreSQL database, aminiastration panel and SMTP MailKit email replies.
                    </p>

                    <div className="project-tags">
                        <span>C# / .NET</span>
                        <span>PostgreSQL</span>
                        <span>Javascript</span>
                        <span>HTML / CSS</span>
                        <span>Google authentication</span>
                    </div>
                </div>

                <div className="projects-card">
                    <img src="/business-project.png" alt="Electrician website" />
                    <h2>Hour Work Tracker</h2>
                    <p>
                        Work tracking system where employees can log hours by project,
                        with weekly and monthly summaries.
                    </p>

                    <div className="project-tags">
                        <span>React</span>
                        <span>Typescript</span>
                        <span>.NET</span>
                        <span>PosgreSQL</span>
                    </div>
                </div>

                <div className="projects-card">
                    <img src="/business-project.png" alt="Electrician website" />
                    <h2>Reading Tracker</h2>
                    <p>
                         Personal reading tracker for books, reading progress, goals and
                        statistics.
                    </p>

                    <div className="project-tags">
                        <span>React</span>
                        <span>Typescript</span>
                        <span>.NET</span>
                        <span>PosgreSQL</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;