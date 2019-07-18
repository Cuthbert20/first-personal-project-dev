import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar'


class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }
  render(){
  return (
    <div className="App">
      <Navbar />
    </div>
  );
  }
}

export default App;
