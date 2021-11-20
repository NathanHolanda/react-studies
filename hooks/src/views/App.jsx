import './App.css'
import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, {data} from '../data/DataContext'

const App = props => {

    const [state, setState] = useState(data)

    return (
        <DataContext.Provider value={{
            number: state.number,
            setNumber: n => setState({...state, number: state.number + n}),
            text: state.text,
            setText: t => setState({...state, text: t})
        }}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App