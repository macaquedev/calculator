import React, { Component } from 'react'
import './Output.css'
class Output extends Component {
    isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }
    render() {
        return (
            <div className="output">
                {this.props.children}
            </div>
        )
    }
}

export default Output