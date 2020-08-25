/* react transition group https://css-tricks.com/animating-between-views-in-react/ */


import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import headshot from './assets/headshot.png';

import MailIcon from './assets/mail-16.png'
import PhoneIcon from './assets/phone-2-16.png'

import About from './components/About';
import Contacts from './components/Contacts';
import Donut from './components/Donut';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      toggleClosed: true,
    }
  }
  render(){
    return (
      <div className="App"> 
          <div className="main">
            <div className="side-bar">
              <div className="circle-crop">
                <img src={headshot} alt="profile_picture"></img>"
              </div>
              <div className="description-box">
                <span className="name">Ji Tin Justin Li</span>
                <span className="short-description">Software Engineeer</span>
              </div>
              <div className="content-links">
                <div className="about">
                  <button onClick={this.handleClick.bind(this,'about')}>ABOUT</button>
                </div>
                <div className='projects'>
                  <button onClick={this.handleClick.bind('snippets')}>CODE SNIPPETS</button>
                      <div className="javascript-fun-stuffs">
                        <button onClick={this.handleClick.bind(this, 'donut')}>Spinny donut</button>
                        <button onClick={(e) => this.handleClick('clicker')}>Something-clicker</button>
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
            <div className="display">
                <div id="spotlight">
                  <About></About>
                </div>
            </div>
          </div>
      </div>
    );
  }
  handleClick = (value) => {
    if(value === 'about'){
      /* show home display */
      ReactDOM.render(<About />,document.getElementById("spotlight"));
    }else if(value === 'snippets'){
      /*todo*/
    }else if(value === 'donut'){
      ReactDOM.render(<Donut />,document.getElementById("spotlight"));
    }else if (value === 'clicker'){
      /*todo*/
    }
    
  }
  handleSlideDown = () => {
      this.setState(state => ({ toggleOpen: !state.toggleOpen }))
  }
}

export default App;
