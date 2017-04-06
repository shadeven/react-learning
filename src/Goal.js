import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Goal extends Component {

    state = {
        goals: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/getAllGoal')
            .then(response => {
                console.log(response.data);
                this.setState({
                    goals: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.goals.map(goal => {
                        return <li key={goal.id}>{goal.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Goal;
