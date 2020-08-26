import React from 'react';
import './Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <div className='home'>
                <div className='left-box'>
                    <button onClick={this.props.onSelectPage.bind(this, 'about')}>About</button>
                </div>
                <div className='right-box text'>
                    <h1>Hello!</h1>
                    <p>I like automating stuffs with code.</p>
                </div>
            </div>
        )
    }

}