import React, {Component} from 'react'
import axios from 'axios'


export default class AllBreeds extends Component {
    constructor(){
        super()

        this.state = {
            dogs: []
        }
    }
    componentDidMount(){
        axios.get('/api/dogs').then((result) => this.setState({dogs: result.data}))
      }  
    render(){
        let dogBreeds = this.state.dogs.map((val) => {
            //key helps react keep track of elments that are updated, changed, deleted, ect on the virtual dom
            return <option value={val.breed} key={val.id}>{val.breed}</option>
        })
        
    return(
        //dropdownlist of all breeds
       <div>
        <select onChange={(e) => this.props.displayDog(e.target.value)} name="" id="">
        {dogBreeds}
        </select>
       </div>
    )
    }
}