import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, data }) => {
//   console.log(data);
  return (
    data && (
      <div className="pl-14 pb-12 ">
        <h1 className="pb-4 text-white text-xl font-semibold">{title}</h1>
        <div className="flex  overflow-x-scroll">
        <div className="flex gap-4">
        {data.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
        </div>
      </div>
      </div>
    )
  );
};

export default MoviesList;
