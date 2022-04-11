import React from "react";

import "./individual-member.styles.scss";


const IndividualMember = ({IndividualMemberData}) => {

    const linkedinUrl = IndividualMemberData.linkedinUrl;
    const imgUrl = IndividualMemberData.imgUrl;
    return (
        <div className="individual-member-container">
            <div className="member-name">{IndividualMemberData.firstName} {IndividualMemberData.lastName}</div>

            <div className='individual-member-picture-container'>
                <img src={imgUrl} alt="pictureHere" className='individual-member-picture'/>
                
                <div className="member-linkedin-icon-container">
                    <a href={linkedinUrl}>
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </div>
                
            </div>

            <div className="member-bio">{IndividualMemberData.bio}</div>
        </div>
    )
}

export default IndividualMember;