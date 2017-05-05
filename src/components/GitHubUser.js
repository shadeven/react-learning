import React, {Component} from 'react';

export default class GitHubUser extends Component {

  state = {
    email: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/shadeven')
      .then(response => {
        this.setState({email: response.data.email})

        for (var item in response.data) {
          if (response.data.hasOwnProperty(item)) {
            // console.log(item + ": " + response.data)
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>{this.state.email}</div>
    )
  }
}