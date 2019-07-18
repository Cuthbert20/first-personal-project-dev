import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import AddBreed from './components/AddBreed'
import AllBreeds from './components/AllBreeds'


class App extends Component {
  constructor() {
    super()

    this.state = {
      dogs: []

    }
  }
  //compoent did mount is just another built in method
  componentDidMount(){
    axios.get('/api/dogs').then((result) => this.setState({dogs: result.data}))
  }
  render(){
  return (
    <div className="App">
      <Navbar />
      <AddBreed  />
      <AllBreeds dogs={this.state.dogs} />
    </div>
  );
  }
}

export default App;
