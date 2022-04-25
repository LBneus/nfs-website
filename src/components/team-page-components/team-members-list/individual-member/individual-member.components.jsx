import React from "react";
import { Link } from "react-router-dom";
import "./individual-member.styles.scss";


const IndividualMember = ({IndividualMemberData}) => {

    return (
        <div className="individual-member-container">
            <div className="member-name">{IndividualMemberData.name}</div>

            <div className='individual-member-picture-container'>
                <img src={IndividualMemberData.mainImage.asset.url} alt="pictureHere" className='individual-member-picture'/>

                <div className="member-linkedin-icon-container">
                    <a target="_blank" href={IndividualMemberData.linkedin}>
                        <i className="fa-brands fa-linkedin fa-2xl" ></i>
                    </a>
                </div>
                
            </div>

            <div className="member-bio">{IndividualMemberData.bio}</div>
        </div>
    )
}

export default IndividualMember;