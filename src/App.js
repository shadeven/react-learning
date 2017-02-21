import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {

    render() {
        return (
            <h1>{this.props.count}</h1>
        )
    }
}

class Button extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.title}</button>
            </div>
        )
    }
}

class App extends Component {

    state = {
        count: 0
    }

    handleIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Counter count={this.state.count}/>
                <Button onClick={() => this.handleIncrement()} title="INCREMENT"/>
                <Button onClick={() => this.handleDecrement()} title="DECREMENT"/>
            </div>
        )
    }
}

export default App;
