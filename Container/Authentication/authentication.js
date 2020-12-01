import React, { Component } from "react";
import { Link } from "react-router-dom";
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: true
    };
  }

  emailHandler = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  clickHandler = () => {};

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Link to="/Search">
          <p>Go to Search Page</p>
        </Link>
      );
    } else {
      return (
        <div>
          <h3>Movie List</h3>
          <input
            placeholder="Email"
            onChange={(e) => this.emailHandler(e)}
            value=""
          />
          <input
            placeholder="Password"
            onChange={(e) => this.passwordHandler(e)}
            value=""
          />
          <input type="submit" onClick={this.clickHandler} />
        </div>
      );
    }
  }
}

export default Authentication;
