import React from "react";
import useSelectedTrailer from "../customHooks/useSelectedTrailer";
import { useDispatch } from "react-redux";
import { setToggleMovieTrailer } from "../redux/movieSlice";

const MovieCard = ({ movie }) => {
  const selectTrailer = useSelectedTrailer();
  const dispatch = useDispatch();

  const handleClick = () => {
    selectTrailer(movie.id);
    dispatch(setToggleMovieTrailer());
    // console.log(movie);
  };

  return (
    <div className="w-44 sm:w-32" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
