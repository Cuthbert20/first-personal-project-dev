import React, {Component} from "react"

export default class AddBreed extends Component {
    constructor(props){
        super(props)

        this.state = {
            breed: "",
            info: "",
            img: ""

        }
        this.handleBreedChange = this.handleBreedChange.bind(this)
        this.handleInfoChange = this.handleInfoChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
    }
    //again you can't change props
    handleBreedChange(val){
        this.setState({breed: val})
    }
    handleInfoChange(val){
        this.setState({info: val})
    }
    handleImageChange(val){
        this.setState({img: val})
    }
            render(){
                const { breed,info,img } = this.state
                return(
                    //onchange this.setstate
                    <main>
                    <input placeholder="Breed" 
                    type="text"
                    onChange={(e) => this.handleBreedChange(e.target.value)} type="text" />
                    
                    <input placeholder="info" type="text"
                    onChange={(e) => this.handleInfoChange(e.target.value)} type="text" />
                    
                    <input placeholder="URL Img"type="text"
                    onChange={(e) => this.handleImageChange(e.target.value)} type="text" />

                    {/* using axios.post to update our breeds axios calls are only
                    called on buttons. You don't want to put it on an input
                    because everytime they type it will send the axios request */}
                    {/* <img src={img} alt=""/> */}
                    <button onClick={() => this.props.addDog({breed: breed, info: info, img: img})} >Submit</button>
                    </main>
                )
            }
    }