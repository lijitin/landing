import React from 'react';
import './About.css';

export default class About extends React.Component {

    render() {
        return (
            <div className='about'>
                <div>
                    <h1>About Me</h1>
                    <p>Graduate from Illinoise Institute of Technology in Computer Science.</p>
                    <p>Currently seeking for positions in Software Development (on-site or remote).</p>
                    <a href='./resume-JiTinJustinLi.pdf' download>Resume </a>
                </div>
            </div>
        )
    }

}