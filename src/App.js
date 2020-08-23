import React from 'react';
import './App.css';
import headshot from './assets/headshot.png';

function App() {
  return (
    <div className="App"> 
        <div className="main">
          <div className="side-bar">
            <div className="circle-crop">
              <img src={headshot} alt="profile_picture"></img>"
            </div>
            <div className="description">
              <p>It's Justin</p>
            </div>
            <div className="links">
              {/* todo */}
            </div>
            <div className="javascript-fun-stuffs">
              {/* todo 
                1. Get a spinning donut
                2. Maybe do a clicker game of some sort?
              */}
            </div>
          </div> 
          <div className="spotlight">
            {/* todo */}
          </div>
        </div>
    </div>
  );
}

export default App;
