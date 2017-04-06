import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Goal extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <ul className="list-group">
                        {this.props.goals.map(goal => {
                            return <li className="list-group-item" key={goal.id}>{goal.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
