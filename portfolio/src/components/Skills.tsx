import { CodeSlash, Display, Briefcase, RocketTakeoff } from "react-bootstrap-icons";

function Skills() {
    return (
        <section id="skills" className="skills-section">

            <h2 className="skills-heading">What I do <span>Best</span></h2>

            <p className="skills-subtext">
                Here are the technologies, tools and platforms I work with.
            </p>

            <div className="skills-grid">
                <div className="skills-card">
                    <div className="skills-icon">
                        <CodeSlash />
                    </div>

                    <h3>Backend</h3>

                    <p>
                        Technologies I use to build scalable and functional
                        server-side applications.
                    </p>

                    <div className="skills-tags">
                        <span>C#</span>
                        <span>ASP.NET / .NET</span>
                        <span>Java</span>
                        <span>Spring Boot</span>
                        <span>REST APIs</span>
                        <span>PostgreSQL</span>
                        <span>Supabase</span>
                    </div>
                </div>


                <div className="skills-card">
                    <div className="skills-icon">
                        <Display />
                    </div>

                    <h3>Frontend</h3>

                    <p>
                        Technologies I use to build clean, responsive and
                        interactive user interfaces.
                    </p>

                    <div className="skills-tags">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                    </div>
                </div>

                <div className="skills-card">
                    <div className="skills-icon">
                        <Briefcase />
                    </div>

                    <h3>Tools</h3>
                    
                    <p>
                        Tools and platforms that help me design, develop
                        and collaborate better.
                    </p>

                    <div className="skills-tags">
                         <span>Git</span>
                        <span>GitHub</span>
                        <span>VS Code</span>
                        <span>IntelliJ</span>
                        <span>Postman</span>
                    </div>
                </div>
            </div>

            <div className="learning-card">

                <div className="learning-left">
                    <div className="skills-icon">
                        <RocketTakeoff />
                    </div>

                    <div>
                        <h3>Currently Learning</h3>

                        <p>
                            I'm always learning and exploring new technologies
                            to become a better developer.
                        </p>
                    </div>
                </div> 

                <div className="learning-tags">
                     <span>Docker</span>
                    <span>Authentication & Security</span>
                    <span>Cloud Deployment</span>
                    <span>Testing</span>
                    <span>Clean Architecture</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;