import React, {Component} from 'react';
import SplitPane from "react-split-pane";

import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Console from "./components/console";
import Document from "./components/document";


class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <SplitPane
              className={'pane'}
              split="vertical"
              minSize={300}
              maxSize={700}
              defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
              onChange={size => localStorage.setItem('splitPos', size)}
          >
              <Console />
              <Document />
          </SplitPane>
        </div>
    );
  }
}

export default App;
