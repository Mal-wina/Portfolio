import { useState } from "react";
import { Bullseye, CodeSlash, Lightbulb } from "react-bootstrap-icons";

const images = [
    "/main page.webp",
    "/services pages.webp",
    "/previous projects.webp",
    "/contact form.webp",
];

function BusinessWebsite() {

    const [currentImage, setCurrentImage] = useState(0);
    const nextSlide = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImage((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
        );
    };
    return (
        <main className="case-page">
            <a href="/" className="back-link">← Back to Projects</a>
            <section className="case-layout">
                <aside className="case-sidebar">
                    <p className="section-title">Full Stack Project</p>

                    <h1>Business <span>Website</span></h1> 
                    
                    <p>
                        A modern business website built collaboratively with a fellow student for an electrician company.
                        It includes a contact form, PostgreSQL database, admin panel
                        and SMTP MailKit email integration.
                    </p>

                    <div className="case-buttons">
                        <button>Live Demo(Coming Soon)</button>
                    </div>

                    <h3>Tech Stack</h3>

                    <div className="project-tags">
                        <span>C# / .NET</span>
                        <span>PostgreSQL</span>
                        <span>MailKit</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                        <span>Bootstrap</span>
                    </div>

                    <h3>Key Features</h3>

                    <ul className="case-list">
                        <li>Responsive and modern UI</li>
                        <li>Contact form with database storage</li>
                        <li>SMTP MailKit email integration</li>
                        <li>Admin panel for managing inquiries</li>
                    </ul>
                </aside>

               <section className="case-main">
                    <img
                        className="case-main-image"
                        src={images[currentImage]}
                        alt="Project preview"
                    />

                    <div className="case-slider">
                        <button className="slider-arrow" onClick={prevSlide}>‹</button>

                    <div className="case-thumbnails">
                        {images.map((image, index) => (
                        <button
                            key={index}
                            className={currentImage === index ? "active" : ""}
                            onClick={() => setCurrentImage(index)}
                        >
                            <img src={image} alt="Preview thumbnail" />
                        </button>
                    ))}
                </div>

                <button className="slider-arrow" onClick={nextSlide}>›</button>
            </div>
        <div className="case-info-grid">
            <div className="case-info-card">
                <div className="case-info-icon">
                    <Bullseye />
                </div>
                    <h3>The Goal</h3>
                    <p>Build a professional website that showcases services and lets clients get in touch.</p>
                </div>

                <div className="case-info-card">
                    <div className="case-info-icon">
                        <CodeSlash />
                    </div>
                        <h3>What I Learned</h3>
                        <p>I improved my backend, database and email integration skills.</p>
                    </div>

                <div className="case-info-card">
                    <div className="case-info-icon">
                        <Lightbulb />
                    </div>
                    <h3>Challenges</h3>
                    <p>Handling email setup, form security and a clean admin experience.</p>
                </div>
            </div>
        </section>
    </section>
    </main>
    );
}

export default BusinessWebsite;