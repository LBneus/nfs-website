import React from "react";

import "./contact-form.styles.scss";

const ContactForm = () => {

    return(
        <div className="contact-form-container">

            <div className="contact-form-header-message">Contact Us!</div>
            <div className="contact-form-question-message">Are you interested in learning more about our project? Collaborating? Please feel free to get in touch!</div>
            <div className="contact-information">
                <div className="professor-name">Professor Daniel A. Balasubramanian</div>
                <div className="professor-email">Email: daniel.a.balasubramanian@vanderbilt.edu</div>
                <div className="research-title">Title: Research Scientist and Adjunct Assistant Professor of Computer Science at Vanderbilt University</div>
            </div>
        
        </div>
    )
}

export default ContactForm;