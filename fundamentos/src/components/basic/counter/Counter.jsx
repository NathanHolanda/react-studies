import React, { Component } from 'react'
import './counter.css'

class Counter extends Component {
    state = {
        value: this.props.number,
        step: 1
    }

    up = () => {
        this.setState({
            value: this.state.value + this.state.step
        })
    }

    down = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    changeStep = e => {
        this.setState({
            step: +e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <label htmlFor="step">Progressão: </label>
                <input type="number" id="step" value={this.state.step} onChange={this.changeStep}/>
                <div>
                    <button className="plus" onClick={this.down}>-</button>
                    <button className="less" onClick={this.up}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter