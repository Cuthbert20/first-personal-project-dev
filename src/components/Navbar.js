import React from "react"
import Doglogo from './Doglogo'

export default function Navbar() {
    return(
        <header className="navbar" >
            <Doglogo />
            <a href="https://en.wikipedia.org/wiki/Dog"><i  id="icons" className="fas fa-dog fa-lg"></i></a>
            <span id="nav-cnt">A guide to the Dogs of the World</span>
            <a href="https://en.wikipedia.org/wiki/Dog"><i  id="icons" className="fas fa-dog fa-lg"></i></a>
            <Doglogo />
           
        </header>
    )
}

