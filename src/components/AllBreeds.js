import React, {Component} from 'react'


export default class AllBreeds extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }
    render(){
        let dogBreeds = this.props.dogs.map((val) => {
            //key helps react keep track of elments that are updated, changed, deleted, ect on the virtual dom
            return <option key={val.id}>{val.breed}</option>
        })
    return(
        //dropdownlist of all breeds
       <section>
        <select name="" id="">
            {dogBreeds}
        </select>
       </section>
    )
    }
}