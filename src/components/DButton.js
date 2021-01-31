import React, { Component } from 'react'
import './DButton.css'
class DButton extends Component {
    isOperator = val => val === "." 
    render() {
        return (
            <div className={`${this.isOperator(this.props.children) ? "doperator" : "dbutton"}`} onClick={() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        )
    }
}

export default DButton