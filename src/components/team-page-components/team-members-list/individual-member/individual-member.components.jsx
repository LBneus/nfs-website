import React from "react";

import "./individual-member.styles.scss";


const IndividualMember = ({IndividualMemberData}) => {

    console.log(IndividualMemberData.firstName);
    return (
        <div className="individual-member-container">
            <div className='individual-member-picture-container'>
                <img src='../../../../images/&{}' alt="pictureHere" className='individual-member-picture'/>
            </div>
        </div>
    )
}

export default IndividualMember;