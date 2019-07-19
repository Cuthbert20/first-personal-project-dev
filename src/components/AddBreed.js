import React, {Component} from "react"

export default class AddBreed extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    //again you can't change props
    handleChange(val){
        this.setState({userInput: val})
    }
            render(){
                return(
                    //onchange this.setstate
                    <main>
                    <input placeholder="Breed" 
                    type="text"
                    onChange={(e) => this.handleChange(e.target.value)} type="text" />
                    
                    <input placeholder="info" type="text"
                    onChange={(e) => this.handleChange(e.target.value)} type="text" />
                    
                    <input placeholder="URL Img"type="text"
                    onChange={(e) => this.handleChange(e.target.value)} type="text" />

                    {/* using axios.post to update our breeds axios calls are only
                    called on buttons. You don't want to put it on an input
                    because everytime they type it will send the axios request */}
                    <button onClick={() => this.props.addDog({breed: this.state.userInput})} >Submit</button>
                    </main>
                )
            }
    }