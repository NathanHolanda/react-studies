import React from 'react'
import './content.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import Params from '../../views/examples/Params'
import NotFound from '../../views/examples/NotFound'

export default props => (
    <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/params/:param" element={<Params />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
)