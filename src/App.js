import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieList,searchMovie } from './api';
import { setPopularMovies } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovieList();
        dispatch(setPopularMovies(movies));
      } catch (error) {
        console.error('Error fetching movie list:', error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title">{movie.title}</div>
        <img
          className="Movie-image"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="Movie-data">Release: {movie.release_date}</div>
        <div className="Movie-rate">
          Rating: <span className="rating-text">{movie.vote_average}</span>
        </div>
      </div>
    ));
  };

  const search = async (q) => {
    if (q.length > 3) {
      try {
        const searchResults = await searchMovie(q);
        dispatch(setPopularMovies(searchResults.results));
      } catch (error) {
        console.error('Error searching movie:', error);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-transparent">
          <div className="container">
            <div className="navbar-header">
              <h1>
                <a className="navbar-brand text-danger" href="#">
                  Movielist
                </a>
              </h1>
            </div>

            <div className="navbar-form navbar-center">
              <div className="form-group">
                <input
                  placeholder="cari film"
                  className="form-control"
                  onChange={({ target }) => search(target.value)}
                />
              </div>
            </div>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-danger">Register</button>
                <button className="btn btn-outline-danger ml-2">Logins</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
