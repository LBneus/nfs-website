import react from "react";

import { TeamMembers } from "./team-members.data";
import IndividualMember from "./individual-member/individual-member.components";

import "./team-members-list.styles.scss";


const TeamMembersList = () => {

    return(
        <div className="team-members-list-container">

            {TeamMembers.map((item, index) => {
                return(
                    <IndividualMember key={index} IndividualMemberData={item}/>
                )
            })}

        </div>
    )

}

export default TeamMembersList;