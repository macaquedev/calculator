import React, { Component } from 'react'
import './App.css'
import Button from './components/Button'
import DButton from './components/DButton'
import ClearButton from './components/ClearButton'
import Input from './components/Input'
import Output from './components/Output'
import { create, all } from 'mathjs'
const math = create(all)
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            output: "",
            previousKeyClick: "",
        }
    }
    addFactToInput = val => {
        this.setState({ input: this.state.input + "!" })
    }
    addToInput = val => {
        if(this.state.previousKeyClick === "="){
            this.setState({ input: val})
        }
        else {
            this.setState({ input: this.state.input + val })
        }
        this.setState({previousKeyClick: val})

    }
    backspace = () => {
        this.setState({ input: this.state.input.slice(0, -1) })
    }
    clearInput = () => {
        this.setState({ input: ""})
    }
    equals = val => {
        this.setState({previousKeyClick: val})
        try {
            var x = math.evaluate(this.state.input)
            if(x === "Infinity") {
                this.setState({ output: "Math error: result too large to display or division by 0" })   
            }
            else {
                this.setState({ output: math.evaluate(x) })   
            }
        }
        catch(err){
            this.setState({ output: "ERR" })
        }
    }
    addTrigToInput = val => {
        this.setState({previousKeyClick: val})
        this.setState({ input: this.state.input + `${val}(` })
    }
    addOperatorToInput = val => {
        this.setState({previousKeyClick: val})
        this.setState({ input: this.state.input + ` ${val} ` })
    }
    render() {
        return (
            <div className="App">
                <div className="calc-wrapper">
                    <div className="row">
                        <Input>{this.state.input}</Input>
                    </div>
                    <div className="row">
                        <Output>{this.state.output}</Output>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addTrigToInput}>cos</Button>
                        <Button handleClick={this.addTrigToInput}>acos</Button>
                        <Button handleClick={this.addToInput}>pi</Button>
                        <Button handleClick={this.addToInput}>^</Button>
                        <Button handleClick={this.addToInput}>(</Button>
                        <Button handleClick={this.addToInput}>)</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addTrigToInput}>sin</Button>
                        <Button handleClick={this.addTrigToInput}>asin</Button>
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addTrigToInput}>tan</Button>
                        <Button handleClick={this.addTrigToInput}>atan</Button>
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addTrigToInput}>sqrt</Button>
                        <Button handleClick={this.addFactToInput}>fact</Button>
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className="row">
                        <DButton handleClick={this.addToInput}>.</DButton>
                        <DButton handleClick={this.addToInput}>0</DButton>
                        <Button handleClick={this.equals}>=</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={this.backspace}>Backspace</ClearButton>
                        <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default App