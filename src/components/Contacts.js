import React from 'react';
import LinkedInLogo from '../assets/linkedin_light_32x32.png';
import GitHubLogo from '../assets/GitHub-Mark-Light-32px.png';
import './Contacts.css';

class Contacts extends React.Component {

    render() {
        return (
            <div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ji-tin-justin-li/">
                        <img src={LinkedInLogo} alt="LinkedInLogo"></img>
                    </a>
                    <a href="https://github.com/lijitin/">
                        <img src={GitHubLogo} alt="GithubLogo"></img>
                    </a>
                </div>
            </div>
        ); 
    }

}
export default Contacts;