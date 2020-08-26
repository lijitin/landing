/* react transition group https://css-tricks.com/animating-between-views-in-react/ */

import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './App.css';

import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Demo from './components/pages/Demo';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSpotlight: 'home',
      showSpotlight: true,
    }
    this.sidebarElement = React.createRef(); // store the child element for updating sidebar button border
  }
  handleSelectPage = (pageName) => {
    if(this.state.currentSpotlight === pageName){
      return;
    }
    this.setState({showSpotlight: false});
    this.sidebarElement.current.setState({ currentSelectedPageButton: pageName });
    window.setTimeout(this.showPageNow.bind(this, this, pageName), 300);

  }

  showPageNow(obj, pageName){
    obj.setState({currentSpotlight: pageName});
    obj.setState({showSpotlight: true});
    // update sidebar div border
    // obj.sideBarElement.setState({currentSelecetedPage: pageName});
  }

  render(){
    return (
      <div className="App">
        <div className="main">
          <Sidebar ref={this.sidebarElement} onSelectPage={this.handleSelectPage}></Sidebar>
          <div id='debug'></div>
          <div className="display">
            <CSSTransition
              in={this.state.showSpotlight}
              timeout={200}
              classNames="spotlight"
              unmountOnExit
            >
              <div className="spotlight">
                {this.state.currentSpotlight==='home' && <Home onSelectPage={this.handleSelectPage}></Home>}
                {this.state.currentSpotlight==='about' && <About></About>}
                {this.state.currentSpotlight==='demo' && <Demo></Demo>}
              </div>
              
            </CSSTransition>
          </div>
        </div>
      </div>
    );
  }
   
}

export default App;
