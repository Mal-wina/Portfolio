import { Link } from "react-router-dom";

function Projects() {
    return (
        <section className="projects-section">
            <p className="section-title">My Work</p>

            <div className="projects-grid">
                <div className="project-card">
                    <img src="mainpagesmall.webp" alt="Business Website" />

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

                        <Link to="/projects/business-website" className="read-more-link">
                            <button className="btn">Read More</button>
                        </Link>

                    </div>
                </div>

                <div className="project-card">
                    <img src="/work tracker.webp" alt="Work Tracker" />

                    <div className="project-content">
                        <h3>Employee Work Tracker</h3>

                        <p>
                            Employees can register worked hours per project
                            with weekly and monthly summaries.
                        </p>

                        <div className="project-tags">
                            <span>React</span>
                            <span>Typescript</span>
                            <span>HTML/CSS</span>
                            <span>PostgreSQL</span>
                            <span>C# / .NET </span>
                        </div>

                        <Link to="/projects/work-tracker" className="read-more-link">
                            <button className="btn">Read More</button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;