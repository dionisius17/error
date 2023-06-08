import { SET_POPULAR_MOVIES } from './actions';

const initialState = {
  popularMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
