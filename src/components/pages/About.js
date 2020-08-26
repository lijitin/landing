import React from 'react';
import './Home.css';

export default class About extends React.Component {

    render() {
        return (
            <div className='about'>
                <div className='right-box text'>
                    <h1>About Me</h1>
                    <p>Recent IIT CS graduate looking for a career in Software Development.</p>
                    <a href='./resume-JiTinJustinLi.pdf' download>Resume </a>
                </div>
            </div>
        )
    }

}