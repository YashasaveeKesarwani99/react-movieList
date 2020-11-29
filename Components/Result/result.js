import React, { Component } from "react";
import "./result.css";
class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result">
        <img className="img" src={this.props.image} alt="image" />
        <div className="text">
          <p className="title">{this.props.title}</p>
          <p className="release">{this.props.release}</p>
          <p className="overview">{this.props.overview}</p>
        </div>
      </div>
    );
  }
}

export default Result;
