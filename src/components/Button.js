import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Button extends Component {

    render() {
        return (
            <div>
                <button className="btn btn-danger" value={this.props.value} onClick={this.props.onClick}>{this.props.title}</button>
            </div>
        )
    }
}
