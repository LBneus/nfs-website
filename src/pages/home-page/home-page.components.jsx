import React from "react";

import { Link } from "react-router-dom";

import "./home-page.styles.scss";

const HomePage = () => {

    return(
        <div className="home-page-container">
            <div className="div-container">
                <div className='home-page-picture'>
                </div>
                <div className="home-page-texts">
                    <div className="texts-header">OpenData</div>
                    <div className="texts-about-text">Our NSF project studies how data, such as camera pictures and video feeds, can be both publicly contributed and publicly maintained, and used to improve neighborhoods without unduly infringing on personal rights such as privacy. To date, this effort has been driven by governments, through CCTV and similar technology, or private companies, through devices such as doorbell cameras. In contrast, our project focuses on how areas like public safety can be enhanced through the use of data that are obtained and contributed voluntarily by individuals and publicly maintained.</div>
                    <Link to="/teamPage">
                        <button className="texts-my-team-btn">View Our Team</button>
                    </Link>
                </div>

            </div>
        </div>
    )

}

export default HomePage;