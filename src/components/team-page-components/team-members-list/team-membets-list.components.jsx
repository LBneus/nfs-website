import React, { useEffect } from "react";

import { TeamMembers } from "./team-members.data";
import IndividualMember from "./individual-member/individual-member.components";

import "./team-members-list.styles.scss";
import sanityClient from './../../../client.js'

const TeamMembersList = () => {

    useEffect(() => {
        sanityClient.fetch(`*[_type == "collaborator"{name, mainImage{asset->{_id, url}}, bio}`).then((data) => {
            console.log(data)
        }).catch(console.error)
    }, []);
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