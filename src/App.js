import React, { Component } from 'react';
import CreateGoal from './components/CreateGoal';

export default class App extends Component {

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
                <CreateGoal/>
            </div>
        )
    }
}
