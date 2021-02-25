const giftReducer = (state = [], action) => { // Gifs reducer
  switch(action.type) {
    case 'SET_GIFS':
      return action.payload;

    default:
      return state;
  }
}

export default giftReducer;