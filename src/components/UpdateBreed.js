import React, {Component} from 'react'

export default class UpdateBreed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newBreed: "",
            aDog: ""
        }
    }
    render(){
        //Don't try to change props if you need to manipulate props you need to use a passed down function.
        console.log("props")
        let allDogs = this.props.dogs.map((val) => {
            return <div key={val.id}>{val.breed}
            <input placeholder="Update Name"  onChange={(e) => this.setState({newBreed: e.target.value})} ref={el => this.input = el} type="text"/>
            <img src={val.img} alt=""/>
            <button onClick={() => {
                this.props.updateDogs(val.id, {breed: this.state.newBreed})
                this.input.value = ""
            }} ><i className="fas fa-file-signature"></i></button>
                <button onClick={() => this.props.deleteDog(val.id)} >Delete</button>
            </div>
        })
        

        //.filter.map
        console.log(allDogs)
        return(
            <div>     
                {allDogs}
            </div>
        )
    }
}