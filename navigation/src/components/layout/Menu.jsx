import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

export default props => (
    <nav className="menu">
        <ul>
            <Link to="/">
                <li>Início</li>
            </Link>
            <Link to="/params/123">
                <li>Param #1</li>
            </Link>
            <Link to="/params/Texto">
                <li>Param #2</li>
            </Link>
            <Link to="/inexistente">
                <li>Inexistente</li>
            </Link>
            <Link to="/sobre">
                <li>Sobre</li>
            </Link>
        </ul>
    </nav>
)