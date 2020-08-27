import React from 'react';
import './Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <div className='homepage'>
                <div>
                    <h1>I'm Justin!</h1>
                    <p>I like automating stuffs with code.</p>
                    <button  onClick={this.props.onSelectPage.bind(this, 'about')}>More</button>
                </div>
            </div>
        )
    }

}