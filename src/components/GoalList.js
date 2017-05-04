import React, {Component} from 'react';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.css';

export default class GoalList extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <ul className="list-group">
                        {this.props.goals.map((goal, index) => {
                            return <li className="list-group-item clearfix" key={goal.id}>{index + 1}{'. '}{goal.name}{goal.description ? ': ' + goal.description : ''}
                                      <span className="pull-right">
                                          <Button title="Delete" onClick={this.props.onDelete} value={[goal.id, index]}/>
                                      </span>
                                   </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
