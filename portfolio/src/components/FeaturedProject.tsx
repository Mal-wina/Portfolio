import { useState } from "react";

function FeaturedProject() {

    const images = [
        "/business-project.png",
        "/admin-panel.png"
    ];

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
        <section className="featured-project">
            <div className="project-text">
                <p className="section-title">Featured Project</p>
                <h2>Business Website (Client Project)</h2>
                
                <p>
                    A modern website built for an electrician company in collaboration
                    with a fellow student using GitHub. The website contains a contact form,
                    PostgreSQL database, administration panel and email integration.
                </p>

                <ul className="project-list">
                    <li>Contact form validation</li>
                    <li>Inquiries stored in PostreSQL, hosted on Supabase</li>
                    <li>Admin panel to add, edit and update inquiries</li>
                    <li>Automatic email relies using SMTP MailKit</li>
                </ul>
            </div>

            <div className="project-preview">
                <img src={images[currentImage]} alt="Business website preview" />
                
                    <button className="slider-btn left" onClick={prevSlide}>‹</button>
                    <button className="slider-btn right" onClick={nextSlide}>›</button>
                
            </div>

            <button className="read-more">Read More</button>

            <div className="tech-row">
                <span>C# / .NET</span>
                <span>PostgreSQL</span>
                <span>SMTP MailKit</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
            </div>
        </section>
    );
}

export default FeaturedProject;