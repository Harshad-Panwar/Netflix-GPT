import React from "react";

const MovieCard = ({poster}) => {
  return (
    <div className="w-44">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
