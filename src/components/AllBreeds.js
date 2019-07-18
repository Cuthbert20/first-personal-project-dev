import React, {Component} from 'react'


export default class AllBreeds extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }
    render(){
        let dogBreeds = this.props.dogs.map((val) => {
            return <option>{val.breed}</option>
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