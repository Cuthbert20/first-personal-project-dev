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
            return <div className="dogcard" key={val.id}>{val.breed}
            <div>
            <img className="main-img" src={val.img} alt=""/>
            <div id="hidden"><i class="fas fa-heart-square fa-lg"></i></div>
            <main>{val.info}</main>
            </div>
            <input size="10" placeholder="Update Name"  onChange={(e) => this.setState({newBreed: e.target.value})} ref={el => this.input = el} type="text"/>
            <br/>
            <button  className="update-btn" onClick={() => {
                this.props.updateDogs(val.id, {breed: this.state.newBreed})
                this.input.value = ""
            }} >Update</button>
                <button className="main-delete"  onClick={() => this.props.deleteDog(val.id)} >Delete</button>
                <br id="spacer"/>
            </div>
        })
        

        //.filter.map
        console.log(allDogs)
        return(
            <div className="card-container">     
                {allDogs}
            </div>
        )
    }
}