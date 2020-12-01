import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { emailHandler, passwordHandler } from "../../Actions/actions";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  clickHandler = (pops) => {
    const email = this.props.email;
    const pass = this.props.password;

    if (pops === "signup") {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
          {
            email: email,
            password: pass
          }
        )
        .then((res) => {
          if (res.status === 200) {
            this.setState({ isLoggedIn: true });
          }
        });
    } else if (pops === "login") {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
          {
            email: email,
            password: pass
          }
        )
        .then((res) => {
          if (res.status === 200) {
            this.setState({ isLoggedIn: true });
          }
        });
    }
  };

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
            onChange={(e) => this.props.emailHandler(e)}
            value={this.state.email}
          />
          <input
            placeholder="Password"
            onChange={(e) => this.props.passwordHandler(e)}
            value={this.state.password}
          />
          <input
            type="submit"
            value="SignUp"
            onClick={() => this.clickHandler("signup")}
          />
          <input
            type="submit"
            value="LogIn"
            onClick={() => this.clickHandler("login")}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password
  };
};

export default connect(mapStateToProps, { emailHandler, passwordHandler })(
  Authentication
);
