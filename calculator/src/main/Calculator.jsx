import React, { Component, Fragment } from 'react'
import './calculator.css'
import Display from '../components/display/Display'
import Button from '../components/button/Button'

class Calculator extends Component {
    render(){
        return (
            <>
                <h1 className="title">Calculadora</h1>
                <div className="calculator">
                    <Display value={0}></Display>
                    <Button label='AC' triple/>
                    <Button label='/' operation/>
                    <Button label='7'/>
                    <Button label='8'/>
                    <Button label='9'/>
                    <Button label='*' operation/>
                    <Button label='4'/>
                    <Button label='5'/>
                    <Button label='6'/>
                    <Button label='-' operation/>
                    <Button label='1'/>
                    <Button label='2'/>
                    <Button label='3'/>
                    <Button label='+' operation/>
                    <Button label='0' double/>
                    <Button label='.'/>
                    <Button label='=' operation/>
                </div>
            </>
        )
    }
}

export default Calculator