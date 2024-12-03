
import React from 'react'
import Carrito from './Carrito'
import "./navbar.scss"
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img src="https://i.postimg.cc/yxcJHJTL/jordan.png" />
                <p>Jordan Sports</p>
            </div>
            <ul className="categories">
                <li> Remeras</li>
                <li> Buzos</li>
                <li> Calzas</li>
                <li> Zapatillas</li>
                <li> Accesorios</li>
            </ul>
            <Carrito />
        </nav>
    )
}

export default NavBar