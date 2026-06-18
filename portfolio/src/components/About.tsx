import { Mortarboard, Laptop, CodeSlash } from "react-bootstrap-icons";

function About() {
    return(
        <section id="about" className="about-section">
            <div className="about-card">
                <div className="about-text">
                    <p className="section-title">ABOUT ME</p>

                    <h2>
                        A bit about <span>me</span>
                    </h2>

                    <p>
                        I'm an aspiring software developer and second-year IT student at
                        OsloMet, where I'm studying Information Technology. I also hold a
                        Master's degree in Psychology.
                    </p>

                    <p>
                        My background combines technical development skills with a strong
                        understanding of people and behavior, helping me build practical and
                        user-friendly solutions.
                    </p>

                    <p>
                         I enjoy learning new technologies, solving problems and turning
                        ideas into meaningful applications.
                    </p>

                    <a href="/#contact" className="btn">
                        Let's connect
                    </a>
                </div>

                <div className="about-boxes">
                    <div className="about-box">
                        <Mortarboard />
                        <h3>Education</h3>
                        <p>Second-year IT student at OsloMet</p>
                        <p>Master's degree in Psychology</p>
                    </div>

                    <div className="about-box">
                        <Laptop />
                        <h3>Interests</h3>
                        <p>Building web applications</p>
                        <p>UI/UX and user-friendly design</p>
                    </div>

                    <div className="about-box">
                        <CodeSlash />
                        <h3>Focus</h3>
                        <p>Clean code</p>
                        <p>Problem solving</p>
                        <p>Continous learning</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;