import { useState } from "react";
import { Github, Envelope } from "react-bootstrap-icons";

function Contact() {
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = () => {
        setStatusMessage("Your message has been sent successfully!");
    };

    return (
        <section id="contact" className="contact-section">

            <h2 className="contact-heading">
                Let's <span>Connect</span>
            </h2>

            <p className="contact-text">
                I'm always open to opportunities or collaborations!
            </p>

            <div className="contact-container">
                <div className="contact-info-card">
                    <p className="small-title">GET IN TOUCH</p>

                    <h3>
                        I'd love to hear from <span>you!</span>
                    </h3>

                    <p>
                        Whether you have a question, want to work
                        together or just want to say hi,
                        feel free to reach out!
                    </p>

                    <div className="contact-links">
                        <div className="contact-item">
                            <Envelope />
                            <div>
                                <a href="mailto:malwinapaulinaczajka@gmail.com">
                                    malwinapaulinaczajka@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Github />
                            <div>
                                <a
                                    href="https://github.com/Mal-wina"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    github.com/Mal-wina
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="/Malwina Czajka_CV.pdf" download className="btn">
                        Download CV
                    </a>
                </div>

                <form name="contact" method="POST" data-netlify="true" className="contact-form" onSubmit={handleSubmit}>
                    
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="input-row">
                        <input name="name" type="text" placeholder="Your Name" required/>
                        <input name="email" type="email" placeholder="Your Email" required />
                    </div>

                    <input name="subject" type="text" placeholder="Subject" required/>

                    <textarea name="message" placeholder="Your Message" required></textarea>

                    <button type="submit">Send Message</button>

                    {statusMessage && (
                        <p className="form-status">
                            {statusMessage}
                        </p>
                    )}
                </form>

            </div>
        </section>
    );
}

export default Contact;