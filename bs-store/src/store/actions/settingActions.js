export const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(message) {
  return  function(dispatch) {
    dispatch({
      type: SET_MESSAGE,
      payload: message
    });

  };
}
