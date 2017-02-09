import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static contextTypes = {
     router: React.PropTypes.object
   }

  homeTabPress() {
    this.context.router.push('/');
  }

  searchTabPress() {
    this.context.router.push('/search')
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Tabs>
            <Tab label='Home' onActive={()=>this.homeTabPress()}/>
            <Tab label='Search' onActive={()=>this.searchTabPress()}/>
          </Tabs>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
