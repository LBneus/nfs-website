import React, { useEffect, useState } from "react";

import { TeamMembers } from "./team-members.data";
import IndividualMember from "./individual-member/individual-member.components";

import "./team-members-list.styles.scss";
import sanityClient from './../../../client.js'

const TeamMembersList = () => {

    const [collaborators, setCollaborators] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "collaborator"]{name, mainImage{asset->{_id, url}}, bio, linkedin}`).then((data) => {
            console.log(data);
            setCollaborators(data)
        }).catch(console.error)
    }, []);

    return(
        <div className="team-members-list-container">
            { collaborators ?
                collaborators.map((collaborator, index) => (
                    <IndividualMember key={index} IndividualMemberData={collaborator} />
                ))
            : <></>}
        </div>
    )

}

export default TeamMembersList;