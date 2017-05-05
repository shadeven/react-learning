import React, {Component} from 'react';
import axios from 'axios';
import CreateGoal from './CreateGoal';
import GoalList from './GoalList';
import 'bootstrap/dist/css/bootstrap.css';
import update from 'react-addons-update';
import 'whatwg-fetch';

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
    const index = e.target.value;
    const id = e.target.id;

    fetch('http://127.0.0.1:8000/api/deleteGoalById/' + id, {
      method: 'delete'
    }).then(response => {
      console.log(response);
      this.setState({
        goals: update(this.state.goals, {$splice: [[index, 1]]})
      })
    }).catch((error) => {
      console.log(error);
    })
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

