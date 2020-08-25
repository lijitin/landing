import React from 'react';
import './About.css';

export default class About extends React.Component {

    render() {
        return (
            <div className='about'>
                <div className='left-box'>
                    <button>GitHub-ResourceLogger</button>
                    <button>Resume</button>
                </div>
                <div className='right-box text'>
                    <h1>Hello!</h1>
                    <p>I like automating stuffs with code.</p>
                </div>
            </div>
        )
    }

}