import React from 'react';
import './About.css';

export default class About extends React.Component {

    render() {
        return (
            <div className='about'>
                <div>
                    <h1>About Me</h1>
                    <p>Graduated in Master of Computer Science from <a href="https://www.iit.edu/">Illinois Institute of Technology</a>.</p>
                    <p>Currently seeking for positions in Software Development (on-site or remote).</p>
                    <a href='./resume-JiTinJustinLi.pdf' download>Resume </a>
                </div>
            </div>
        )
    }

}