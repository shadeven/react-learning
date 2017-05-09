import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';
import PropTypes from 'prop-types';

export default class CreateGoal extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <div className="form-area">
            <form role="form">
              <h3>Create Goal</h3>
              <div className="form-group">
                <input type="text" className="form-control" id="name" name="name"
                       placeholder="Goal Name" value={this.props.goalName}
                       onChange={this.props.onNameChange}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="description" name="description"
                       placeholder="Description" value={this.props.descriptionName}
                       onChange={this.props.onDescriptionChange}/>
              </div>
              <button type="button" id="submit" name="submit" className="btn btn-primary pull-right"
                      onClick={this.props.onClick}>Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

CreateGoal.propTypes = {
  goalName: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  descriptionName: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}
