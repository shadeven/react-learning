import React, {Component} from 'react';
import axios from 'axios';
import CreateGoal from './CreateGoal';
import GoalList from './GoalList';
import 'bootstrap/dist/css/bootstrap.css';
import update from 'react-addons-update';

export default class GoalContainer extends Component {

    state = {
        name: '',
        description: '',
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
            name: this.state.name,
            description: this.state.description
        })
            .then(response => {
                this.setState({
                    name: '',
                    description: ''
                })

                this.setState((prevState) => {
                    return {goals: prevState.goals.concat(response.data)};
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleDelete(e) {
        this.setState({
            goals: update(this.state.goals, {$splice: [[e.target.value[2], 1]]})
        })

        // axios.delete('http://127.0.0.1:8000/api/deleteGoalById', {
        //     params: {
        //       id: e.target.value[0]
        //     }
        // })
        //   .then(response => {
        //     console.log(response);
        //     this.state.goals.splice(e.target.value[2], 1);
        //     this.setState({
        //       goals: this.state.goals
        //     })
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
    }

    render() {
        return (
            <div>
                <CreateGoal goalName={this.state.name} descriptionName={this.state.description}
                            onNameChange={(e) => this.handleNameChange(e)}
                            onDescriptionChange={(e) => this.handleDescriptionChange(e)}
                            onClick={(e) => this.handleClick(e)}/>
                <GoalList goals={this.state.goals} onDelete={(e) => this.handleDelete(e)}/>
            </div>
        )
    }
}
