export const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';

export const setPopularMovies = (movies) => ({
  type: SET_POPULAR_MOVIES,
  payload: movies,
});
