import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import FilmArray from "../filmQuotes/filmQuotes";
import "./slideShow.css";
const SlideShow = () => {
  return (
    <div
      style={{
        width: "50%"
      }}
    >
      <Slider>
        {FilmArray.map((slide) => (
          <div
            style={{
              textAlign: "center"
            }}
          >
            <h1
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "4em",
                color: "white"
              }}
            >
              {slide.quote}
            </h1>
            <div
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1em",
                color: "white"
              }}
            >
              {slide.film}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
