import React from 'react'
import './app.css'
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'
import { BrowserRouter as Router } from 'react-router-dom'

export default props => (
    <div className="app">
        <Router>
            <Menu></Menu>
            <Content></Content>
        </Router>
    </div>
)