import React, { Component } from "react";
import axios from "axios";
import Result from "../../Components/Result/result";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      arr: []
    };
  }

  inputHandler = (e) => {
    this.setState({
      val: e.target.value
    });
    console.log(this.state.val);
  };

  clickHandler = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=17638093d735649485bd44d7ce3007e9&query=${this.state.val}
      `
      )
      .then((res) => {
        this.setState({
          arr: res.data.results
        });
      });
  };

  render() {
    return (
      <div className="search">
        <input
          placeholder="Enter movie name"
          onChange={(e) => this.inputHandler(e)}
          value={this.state.val}
        />
        <input type="submit" onClick={this.clickHandler} value="Search" />
        {this.state.arr.map((obj) => {
          return (
            <Result
              key={obj.id}
              overview={obj.overview}
              release={obj.release_date}
              title={obj.title}
              image={
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
                obj.poster_path
              }
            />
          );
        })}
      </div>
    );
  }
}
export default Search;
