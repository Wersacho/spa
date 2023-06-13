import React from 'react';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <div className="contact-details">
                    <p className="contact-description">
                        If you have any questions, suggestions, or feedback, feel free to reach out to us. We'd love to hear
                        from you!
                    </p>
                    <p className="contact-info">
                        Email: info@example.com<br />
                        Phone: +1 123-456-7890<br />
                        Address: 123 Main Street, City, Country
                    </p>
                </div>
            </div>
        </div>
    );
}


export { Contact };