import React from 'react';

import headshot from '../assets/headshot.png';
import MailIcon from '../assets/mail-16.png'
import PhoneIcon from '../assets/phone-2-16.png'

import Contacts from './Contacts'

export default class Sidebar extends React.Component{
    
    handleSelectPageClick = (pageName) =>{
        this.props.onSelectPage(pageName);
    }
    render() {
        return (
            <div className="side-bar">
                <div className="circle-crop">
                    <img src={headshot} alt="profile_picture"></img>"
                </div>
                <div className="description-box">
                    <span className="name">Ji Tin Justin Li</span>
                    <span className="short-description">Software Engineeer</span>
                </div>
                <div className="links">
                    <div className="home">
                        <button onClick={this.handleSelectPageClick.bind(this, 'home')}>HOME</button>
                    </div>
                    <div className="about">
                        <button onClick={this.handleSelectPageClick.bind(this, 'about')}>ABOUT</button>
                    </div>
                    <div className='demo'>
                        <button onClick={this.handleSelectPageClick.bind(this, 'demo')}>CODE SNIPPETS</button>
                        <div className="javascript-fun-stuffs">
                            <p>Spinny donut</p>
                            <p>Something-clicker</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar-bottom">
                    <div className="direct-contacts">
                        <div>
                            <img src={MailIcon} alt="MailIcon"></img>
                            <span> lijitin11@gmail.com </span>
                        </div>
                        <div>
                            <img src={PhoneIcon} alt="PhoneIcon"></img>
                            <span> +1 (312) 358-3013 </span>
                        </div>
                    </div>
                    <Contacts></Contacts>
                </div>
            </div> 

        );
    }


}
      