import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from './../../client.js'

import "./home-page.styles.scss";

const HomePage = () => {

    const [content, setContent] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "landingContent"]{title, description, mainImage{asset->{_id, url}}, button, buttonRoute}`).then((data) => {
            setContent(data[0])
            console.log(data)
        }).catch(console.error)
    }, []);

    return (
    <>
        {content ?
        <div className="home-page-container">
            <div className="div-container">
                <div className='home-page-picture'>
                    <img src={content.mainImage.asset.url}></img>
                </div>
                <div className="home-page-texts">
                    <div className="texts-header">{content.title}</div>
                    <div className="texts-about-text">{content.description}</div>
                    <Link to={content.buttonRoute}>
                        <button className="texts-my-team-btn">{content.button}</button>
                    </Link>
                </div>

            </div>
        </div>
                : <></>}
            </>
    )

}

export default HomePage;