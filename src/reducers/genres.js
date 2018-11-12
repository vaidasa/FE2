export default (state = [], action) => {
  switch(action.type) {
    case 'SET_GENRES':
      console.log("on genres reducer " + action.payload.genres);
      return action.payload.genres;
    default:
      return state;
  }
};