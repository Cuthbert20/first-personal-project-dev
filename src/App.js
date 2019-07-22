import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import AddBreed from './components/AddBreed'
import AllBreeds from './components/AllBreeds'
import UpdateBreed from './components/UpdateBreed'
import DeleteBreed from './components/DeleteBreed'
import Footer from './components/Footer'


class App extends Component {
  constructor() {
    super()

    this.state = {
      dogs: []

    }
    this.updateDogs = this.updateDogs.bind(this)
    this.addDog = this.addDog.bind(this)
    this.deleteDog = this.deleteDog.bind(this)
    this.displayDog = this.displayDog.bind(this)
  }
  //compoent did mount is just another built in method
  componentDidMount(){
    axios.get('/api/dogs').then((result) => this.setState({dogs: result.data}))
    .catch(function (error){
      error = "Its not working"
      alert(error)
    })
  }  
  updateDogs(id, body){
    //when you use axios you are send a promise
    axios.put(`/api/dogs/${id}`,body).then(res => {
      console.log("id",id) 
      this.setState({dogs: res.data})
    })
  }
  addDog(body) {
    //making an axios call and setting the body
    //we get somthing back a response ie res
    axios.post('/api/dogs', body).then(res => {
      this.setState({dogs: res.data})
    })
  }
  deleteDog(id) {
    //remeber axios calls go on buttons
    axios.delete(`/api/dogs/${id}`).then(res => {
      //console.log(res.data)
      this.setState({dogs: res.data})
    })
  }
  displayDog(breed) {
    //HELP
    axios.get(`/api/dogbreed?breed=${breed}`).then(result => {
      console.log(result.data)
      this.setState({dogs: result.data})
    })
  }
  render() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <br/>
      <UpdateBreed deleteDog={this.deleteDog} updateDogs={this.updateDogs} dogs={this.state.dogs} />
      <br/>
      <AddBreed addDog={this.addDog} dogs={this.state.dogs} />
      <AllBreeds dogs={this.state.dogs} displayDog={this.displayDog}/>
      <Footer />
      <DeleteBreed dogs={this.state.dogs} deleteDog={this.deleteDog} />
      

    </div>
  )
  }
}


export default App;
