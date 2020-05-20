const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.message;
    default:
      return state;
  }
};

export const setMessage = (message, timeout) => {
  return async (dispatch) => {
    dispatch({ type: "SET_MESSAGE", message });
    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", message: "" });
    }, timeout);
  };
};

export default notificationReducer;
