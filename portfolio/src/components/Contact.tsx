function Contact() {
    return (
        <section id="contact" className="contact-section">

            <p>
                CONTACT ME
            </p>

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
                            <span>📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>malwinapaulinaczajka@gmai.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span>💻</span>
                            <div>
                                <h4>GitHub</h4>
                                <p>github.com/Mal-wina</p>
                            </div>
                        </div>
                    </div>
                    <button>Download CV</button>
                </div>

                <form className="contact-form">
                    <div className="input-row">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                    </div>

                    <input type="text" placeholder="Subject" />

                    <textarea placeholder="Your Message"></textarea>

                    <button type="submit">Send Message</button>
                </form>

            </div>
        </section>
    );
}

export default Contact;