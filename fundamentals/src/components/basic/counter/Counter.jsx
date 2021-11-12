import React, { Component } from 'react'
import Display from './Display'
import Step from './Step'
import Buttons from './Buttons'
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

    changeStep = newStep => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div>
                <Display number={this.state.value}></Display>
                <Step jump={this.state.step} onChangeStep={this.changeStep}></Step>
                <Buttons onPlus={this.up} onMinus={this.down}></Buttons>
            </div>
        )
    }
}

export default Counter