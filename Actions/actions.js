export const emailHandler = (e) => (dispatch) => {
  dispatch({
    type: "EMAIL",
    payload: e.target.value
  });
};

export const passwordHandler = (e) => (dispatch) => {
  dispatch({
    type: "PASSWORD",
    payload: e.target.value
  });
};
