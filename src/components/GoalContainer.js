import React, { Component} from 'react';
import axios from 'axios';
import Goal from './Goal';
import CreateGoal from "./CreateGoal";

export default class GoalContainer extends Component {

    state = {
        name: '',
        goals: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/getAllGoal')
            .then(response => {
                this.setState({
                    goals: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleClick(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/createGoal', {
            name: this.state.name
        })
            .then(response => {
                this.setState((prevState) => ({
                    goals: prevState.goals.concat(response.data)
                }));
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <CreateGoal onChange={(e) => this.handleChange(e)} onClick={(e) => this.handleClick(e)}/>
                <Goal goals={this.state.goals}/>
            </div>
        )
    }
}
