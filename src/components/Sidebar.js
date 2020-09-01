import React from 'react';

import './Sidebar.css';

import headshot from '../assets/headshot-default.png';
import MailIcon from '../assets/mail-16.png'
import PhoneIcon from '../assets/phone-2-16.png'

import Contacts from './Contacts'

export default class Sidebar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentSelectedPageButton: 'home',
        }
    }
    
    handleSelectPageClick = (pageName) =>{
        this.props.onSelectPage(pageName)
        this.setState({ currentSelectedPageButton: pageName });
    }

    divClassName = (pageName) => {
        return (this.state.currentSelectedPageButton === pageName) ? pageName + ' divSelected' : pageName;
    }
    pingAlert = () => {
        alert('ping');
    }
    render() {
        return (
                <div className="sidebar">
                    <div className="sidebar-top">
                        <div className="circle-crop">
                            <img src={headshot} alt="profile_picture"></img>"
                        </div>
                        <div className="description-box">
                            <span className="name">Ji Tin Justin Li</span>
                            <span className="short-description">Software Engineeer</span>
                            <span className="location">Milwaukee, WI</span>
                        </div>
                        <div className="links">
                            <div className={this.divClassName('home')}>
                                <button onClick={this.handleSelectPageClick.bind(this, 'home')}>HOME</button>
                            </div>
                            <div className={this.divClassName('about')}>
                                <button onClick={this.handleSelectPageClick.bind(this, 'about')}>ABOUT</button>
                            </div>
                            <div className={this.divClassName('demo')}>
                                <button onClick={this.handleSelectPageClick.bind(this, 'demo')}>PROJECTS</button>
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
      