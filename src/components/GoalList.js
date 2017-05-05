import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class GoalList extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <table className="table table-striped">
              <tbody>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
              {this.props.goals.map((goal, index) => {
                return <tr key={goal.id}>
                  <td>{index + 1}</td>
                  <td>{goal.name}</td>
                  <td>{goal.description}</td>
                  <td>
                    <button id={goal.id} value={index} className="btn btn-danger btn-sm"
                            onClick={this.props.onDelete}>Delete
                    </button>
                  </td>
                </tr>
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
