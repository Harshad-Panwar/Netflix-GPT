import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {
  const { movieResults } = useSelector(store => store.gpt);

  if (!movieResults) return null;

  return (
    <div className="flex justify-center w-full pt-8">
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4 sm:gap-2">
          {movieResults.map((movie) => (
            <MovieCard key={movie[0].id} movie={movie[0]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestion;