import React, {Component} from 'react';
import axios from 'axios';
import CreateGoal from "./CreateGoal";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';

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

    render() {
        return (
            <div>
                <CreateGoal goalName={this.state.name} descriptionName={this.state.description}
                            onNameChange={(e) => this.handleNameChange(e)}
                            onDescriptionChange={(e) => this.handleDescriptionChange(e)}
                            onClick={(e) => this.handleClick(e)}/>
                <BootstrapTable data={this.state.goals} striped hover condensed>
                    <TableHeaderColumn dataField="id" width='5%' isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
