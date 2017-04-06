import React, {Component} from 'react';
import axios from 'axios';
import Goal from './Goal';
import 'bootstrap/dist/css/bootstrap.css';

export default class CreateGoal extends Component {

    state = {
        name: '',
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
                <div className="row">
                    <div className="col-md-3">
                        <form>
                            <div className="input-group">
                                <input onChange={e => this.handleChange(e)} type="text" className="form-control"/>
                                <span className="input-group-btn">
                                <button className="btn btn-primary" type="button"
                                        onClick={e => this.handleClick(e)}>Create</button>
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
                <Goal goals={this.state.goals}/>
            </div>
        )
    }
}
