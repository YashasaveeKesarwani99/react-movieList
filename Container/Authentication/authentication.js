import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
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

  clickHandler = (props) => {
    const email = this.state.email;
    const pass = this.state.password;

    if (props === "signup") {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
          {
            email: email,
            password: pass
          }
        )
        .then((res) => {
          if(res.status === 200)
          {
            this.setState({isLoggedIn:true})
          }
        });
    } else if (props === "login") {
      axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
        {
          email: email,
          password: pass
        }
      ).then(res =>{
        if(res.status === 200)
        {
          this.setState({isLoggedIn:true})
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
            onChange={(e) => this.emailHandler(e)}
            value={this.state.email}
          />
          <input
            placeholder="Password"
            onChange={(e) => this.passwordHandler(e)}
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

export default Authentication;
