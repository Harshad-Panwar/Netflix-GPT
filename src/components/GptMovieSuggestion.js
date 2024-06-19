import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {

  const {movieResults} = useSelector(store => store.gpt);

  if(!movieResults) return null;

  return <div className=" w-2/3 pt-8 ml-60">
    <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
        {movieResults.map((movie) => (
          <MovieCard key={movie[0].id} movie={movie[0]} />
        ))}
        </div>
      </div>
    </div>
};

export default GptMovieSuggestion;
