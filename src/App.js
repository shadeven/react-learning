import React, { Component } from 'react';
import axios from 'axios';
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

class GitHubUser extends Component {

    state = {
        email: ''
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/shadeven')
            .then(response => {
                this.setState({email: response.data.email})

                for (var item in response.data) {
                    if (response.data.hasOwnProperty(item)) {
                        // console.log(item + ": " + response.data)
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>{this.state.email}</div>
        )
    }
}

class ToDoList extends Component {

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                 ))}
            </ul>
        )
    }
}

class App extends Component {

    state = {
        count: 0,
        items: [],
        text: ''
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
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
                <ToDoList items={this.state.items}/>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input onChange={(e) => this.handleChange(e)} value={this.state.text}/>
                    <button>Add</button>
                </form>

                <GitHubUser/>
                <Counter count={this.state.count}/>
                <Button onClick={() => this.handleIncrement()} title="INCREMENT"/>
                <Button onClick={() => this.handleDecrement()} title="DECREMENT"/>
            </div>
        )
    }
}

export default App;
