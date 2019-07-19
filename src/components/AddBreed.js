import React, {Component} from "react"

export default class AddBreed extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    render(){
        let newDog = []
        return(
            <main>
                <button>Add Breed</button>
                <input type="text" placeholder="Breed"/>
                <input type="text" placeholder="Info"/>
                <input type="text" placeholder="Photo URL"/>
            </main>
        )
    }
}