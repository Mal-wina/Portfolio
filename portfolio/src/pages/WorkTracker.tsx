import { useState } from "react";
import { Bullseye, CodeSlash, Lightbulb } from "react-bootstrap-icons";

const images = [
    "/work tracker.webp",
    "/dashboard.webp",
];

function WorkTracker() {

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
                    <p className="section-title">Web App</p>

                    <h1>Work <span>Tracker</span></h1> 
                    
                    <p>
                        A full stack work tracking application built to help the team manage tasks, monitor productivity and track employee work hours efficiently.
                        The system allows employees to log worked hours per project, manage assigned tasks and view weekly or monthly summaries through a clean and responsive dashboard interface.
                    </p>

                    <div className="case-buttons">
                        <button>Live Demo(Coming Soon)</button>
                    </div>

                    <h3>Tech Stack</h3>

                    <div className="project-tags">
                        <span>C# / .NET</span>
                        <span>Typescript</span>
                        <span>React</span>
                        <span>PostgreSQL</span>
                        <span>HTML/CSS</span>
                        <span>Bootstrap</span>
                    </div>

                    <h3>Key Features</h3>

                    <ul className="case-list">
                        <li>User authentication and authorization</li>
                        <li>Task and project management</li>
                        <li>Employee work hour tracking</li>
                        <li>Weekly and monthly summaries</li>
                        <li>Dashboard with statistics and charts</li>
                        <li>Responsive and modern UI</li>
                        <li>PostgreSQL database integration</li>
                        <li>Clean admin and employee workflow</li>
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
                    <p>Build a modern work tracking system that helps teams manage tasks, track hours and stay organized.</p>
                </div>

                <div className="case-info-card">
                    <div className="case-info-icon">
                        <CodeSlash />
                    </div>
                        <h3>What I Learned</h3>
                        <p>Improving my React, backend API and database skills while learning how to build dashboards and responsive full stack applications.</p>
                    </div>

                <div className="case-info-card">
                    <div className="case-info-icon">
                        <Lightbulb />
                    </div>
                    <h3>Challenges</h3>
                    <p>Handling time tracking logic, organizing database relationships and keeping the UI clean while displaying lots of data. 
                    </p>
                </div>
            </div>
        </section>
    </section>
    </main>
    );
}

export default WorkTracker;