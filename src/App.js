import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import AddBreed from './components/AddBreed'
import AllBreeds from './components/AllBreeds'
import UpdateBreed from './components/UpdateBreed'


class App extends Component {
  constructor() {
    super()

    this.state = {
      dogs: []

    }
    this.updateDogs = this.updateDogs.bind(this)
  }
  //compoent did mount is just another built in method
  componentDidMount(){
    axios.get('/api/dogs').then((result) => this.setState({dogs: result.data}))
  }  
  updateDogs(id, body){
    //when you use axios you are send a promise
    axios.put(`/api/dogs/${id}`,body).then(res => {
      console.log("id",id) 
      this.setState({dogs: res.data})
    })
  }
  addDog(body) {
    axios.post('/api/dogs', body).then(res => {
      this.setState({dogs: res.data})
    })
  }
  render() {
  return (
    <div className="App">
      <Navbar />
      <UpdateBreed updateDogs={this.updateDogs} dogs={this.state.dogs} />
      <AddBreed addDogFn={this.addDog} dogs={this.state.dogs} />
      <AllBreeds dogs={this.state.dogs} />
    </div>
  )
  }
}


export default App;
