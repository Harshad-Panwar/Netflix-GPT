import React from "react";
import useSelectedTrailer from "../customHooks/useSelectedTrailer";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const selectTrailer = useSelectedTrailer();
  const navigate = useNavigate();

  const handleClick = () => {
    selectTrailer(movie.id);
    navigate("/browse/trailer");
    // console.log(movie);
  };

  return (
    <div className="w-44" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
