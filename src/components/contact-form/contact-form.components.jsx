import React, {useState, useEffect}from "react";
import sanityClient from './../../client.js'

import "./contact-form.styles.scss";

const ContactForm = () => {

    const [content, setContent] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "contactForm"]{title, description, contactName, contactEmail, contactPosition}`).then((data) => {
            setContent(data[0])
            console.log(data)
        }).catch(console.error)
    }, []);

    return (
        <>
        {content ?
            <div className="contact-form-container">
                <div className="contact-form-header-message">{content.title}</div>
                <div className="contact-form-question-message">{content.description}</div>
                <div className="contact-information">
                    <div className="professor-name">{content.contactName}</div>
                    <div className="professor-email">Email: {content.contactEmail}</div>
                    <div className="research-title">Title: {content.contactPosition}</div>
                </div>
            </div>
        : <></>}
        </>
    )
}

export default ContactForm;