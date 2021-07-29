import React, {useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import {getUpcoming} from "../api/tmdb-api";

const upcomingMoviesPage = (props) => {
  const toDo = () => true;
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
      getUpcoming().then(movies => {
          setMovies(movies);
      });
      //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
          <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          selectFavourite={toDo}
          /> 
  );
};
export default upcomingMoviesPage;

