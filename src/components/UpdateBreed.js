import React, {Component} from 'react'

export default class UpdateBreed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newBreed: ""
        }
    }
    render(){
        //Don't try to change props if you need to manipulate props you need to use a passed down function.
        console.log("props")
        let allDogs = this.props.dogs.map((val) => {
            return <div key={val.id}>{val.breed}
            <input placeholder="Update Name" ref={el => this.input = el} onChange={(e) => this.setState({newBreed: e.target.value})} type="text"/>
            <img src={val.img} alt=""/>
            <button onClick={() => {
                this.props.updateDogs(val.id, {breed: this.state.newBreed}) //console.log(val)
                this.input.value = ""}}  ><i className="fas fa-file-signature"></i></button>
            
            </div>
        })
        console.log(allDogs)
        return(
            <div>{allDogs}</div>
        )
    }
}