import React, {Component} from 'react'

export default class DeleteBreed extends Component {
    constructor(){
        super()

        this.state = {

        }
    }
    render() {
        return(



            <button className="main-delete" onClick={() => this.props.deleteDog(this.props.dogs)} >Delete</button>
        )
    }
} 