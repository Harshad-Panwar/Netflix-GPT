import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, data }) => {
  // console.log(data);
  return (
    data && (
      <div className="px-14 pb-8 sm:px-2 sm:pb-4 ">
        <h1 className="text-white sm:text-sm text-xl font-semibold sm:pb-2 pb-4">{title}</h1>
        <div className="flex justify-center w-full">
        <div className="flex  overflow-x-scroll">
        <div className="flex gap-4 sm:gap-2">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
      </div>
      </div>
      </div>
    )
  );
};

export default MoviesList;
