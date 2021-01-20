import React from "react";
import FilmArray from "../filmQuotes/filmQuotes";
import { useEffect } from "react";

const SlideShow = (props) => {
  var i = 0;
  var filmObject = {};

  const slideNext = () => {
    i++;
    if (i > 6) {
      i = 0;
    }

    setTimeout(slides(), 1000);
  };

  const slides = () => {
    filmObject = FilmArray[i];
    setTimeout(slideNext(), 2000);
  };

  slides();

  return (
    <div
      style={{
        opacity: "0",
        transition: "opacity 1.0s ease-in"
      }}
    >
      <div>{filmObject.quote}</div>
      <div>{filmObject.film}</div>
    </div>
  );
};

export default SlideShow;
