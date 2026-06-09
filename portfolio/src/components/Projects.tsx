function Projects() {
    return (
        <section className="projects-section">
            <p className="section-title">My Work</p>

            <div className="projects-grid">
                <div className="project-card">
                    <img src="/business-project.png" alt="Business Website" />

                    <div className="project-content">
                        <h3>Business Website</h3>

                        <p>
                            Modern client website with contact form,
                            PostgreSQL database, admin panel and
                            SMTP MailKit email integration.
                        </p>

                        <div className="project-tags">
                            <span>C# / .NET</span>
                            <span>PostgreSQL</span>
                            <span>MailKit</span>
                            <span>Javascript</span>
                            <span>HTML/CSS</span>
                        </div>

                        <button>Read More</button>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/admin-panel.png" alt="Work Tracker" />

                    <div className="project-content">
                        <h3>Employee Work Tracker</h3>

                        <p>
                            Employees can register worked hours per project
                            with weekly and monthly summaries.
                        </p>

                        <div className="project-tags">
                            <span>React</span>
                            <span>Typescript</span>
                            <span>.NET</span>
                            <span>PostgreSQL</span>
                        </div>

                        <button>Read More</button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;