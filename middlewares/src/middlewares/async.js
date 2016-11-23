export default function({ dispatch }) {
  return next => action => {
    // If the action does not have a payload or the payload does not have a .then property
    // we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    action.payload
      .then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  };

  // return function(next) {
  //    return function(action) {
  //      next(action);
  //    }  
  //}
}