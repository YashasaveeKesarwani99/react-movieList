import React from "react";

const initialState = {
  email: ""
};

const Reducer = (state = initialState, action) => {
  if (action.type === "EMAIL") {
    return {
      ...state,
      email: action.payload
    };
  } else if (action.type === "PASSWORD") {
    return {
      ...state,
      password: action.payload
    };
  } else {
    return { state };
  }
};

export default Reducer;
