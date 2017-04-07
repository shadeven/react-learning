import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class CreateGoal extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <form>
                            <div className="input-group">
                                <input onChange={this.props.onChange} type="text" className="form-control"/>
                                <span className="input-group-btn">
                                <button className="btn btn-primary" type="button"
                                        onClick={this.props.onClick}>Create</button>
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
