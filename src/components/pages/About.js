import React from 'react';
import './About.css';

export default class About extends React.Component {
    scrollToTop = () => {
        this.props.toTop.current.scrollIntoView({ behavior: "smooth" })
    }
    render() {
        return (
            <div className='aboutpage'>
                <div>
                    <h1>About Me</h1>
                    <p>Graduated in Master of Computer Science from <a href="https://www.iit.edu/">Illinois Institute of Technology</a>.</p>
                    <p>Currently seeking for positions in Software Development (on-site or remote).</p>
                    <a href='./resume-JiTinJustinLi.pdf' download>Resume </a>
                </div>
                <div className='scrollButtonDiv'>
                    <button onClick={this.scrollToTop}>back to top</button>
                </div>
            </div>
        )
    }

}