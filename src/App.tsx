import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Main from './components/MainComponent';

class App extends Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
