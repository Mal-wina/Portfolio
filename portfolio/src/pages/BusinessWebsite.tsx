import { useState } from "react";

const images = [
    "/business-project-png",
    "/business-project-png",
    "/business-project-png",
    "/business-project-png",
];

function BusinessWebsite() {

    const [currentImage, setCurrentImage] = useState(0);
    return (
        <main className="case-page">
            <a href="/" className="back-link">← Back to Projects</a>
            <section className="case-layout">
                <aside className="case-sidebar">
                    <p className="section-title">Full Stack Project</p>

                    <h1>Business <span>Website</span></h1> 
                    
                    <p>
                        A modern business website built for an electrician company.
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

                    <div className="case-thumbnails">
                        {images.map((image, index) => (
                            <button
                            key={image}
                            className={currentImage === index ? "active" : ""}
                            onClick={() => setCurrentImage(index)}
                            >
                                <img src={image} alt="Preview thumbnail" />
                            </button>
                        ))}
                    </div>
                </section>
        </main>
    );
}

export default BusinessWebsite;