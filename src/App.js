import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import headshot from './assets/headshot.png';

import Contacts from './components/Contacts';
import Donut from './components/Donut';

class App extends React.Component {
  render(){
    return (
      <div className="App"> 
          <div className="main">
            <div className="side-bar">
              <div className="circle-crop">
                <img src={headshot} alt="profile_picture"></img>"
              </div>
              <div className="description">
                <p>Ji Tin Justin Li</p>
              </div>
              <div className="links">
                {/* todo*/}
                <Contacts></Contacts>
              </div>
              <div className="javascript-fun-stuffs">
                <button onClick={this.handleClick.bind(this, 'donut')}>Spinny donut</button>
                <button onClick={(e) => this.handleClick('clicker')}>Something-clicker</button>
                {/* todo 
                  1. Get a spinning donut
                  2. Maybe do a clicker game of some sort?
                */}
              </div>
            </div> 
            <div className="display">
                <div id="spotlight">

                </div>
            </div>
          </div>
      </div>
    );
  }
  handleClick = (value) => {
    if(value === 'donut'){
      ReactDOM.render(<Donut />,document.getElementById("spotlight"));
    }else if (value === 'clicker'){
      /*todo*/
    }
    
  }
}

export default App;
