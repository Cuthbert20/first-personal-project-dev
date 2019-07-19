import React, {Component} from 'react'

export default class UpdateBreed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newBreed: ""
        }
    }
    render(){
        //when 
        console.log("props")
        let allDogs = this.props.dogs.map((val) => {
            return <div key={val.id}>{val.breed}
            <input onChange={(e) => this.setState({newBreed: e.target.value})} type="text"/>
            <img src={val.img} alt=""/>
            <button onClick={() => {
                this.props.updateDogs(val.id, {breed: this.state.newBreed}) //console.log(val)
            }} ><i class="fas fa-file-signature"></i></button>
            
            </div>
        })
        console.log(allDogs)
        return(
            <div>{allDogs}</div>
        )
    }
}