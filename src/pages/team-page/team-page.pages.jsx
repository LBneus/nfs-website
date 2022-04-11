import react from 'react';

import "./team-page.styles.scss";

import groupPicture from "../../images/group-picture.JPG";
import TeamMembersList from '../../components/team-page-components/team-members-list/team-membets-list.components';

const TeamPage = () => (

    <div className='team-page-container'>

        <div className='group-picture-container'>
            <img src={groupPicture} alt="pictureHere" className='group-picture'/>
        </div>
        
        <TeamMembersList/>
    
    </div>

)

export default TeamPage;