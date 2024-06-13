import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies || !movies.nowPlayingMovies.length) return null;

  const randomNumber = movies.randomNumber;

  const randomMovie = movies.nowPlayingMovies[randomNumber];

  if (!randomMovie) return null;

  // console.log(randomMovie);
  return (
    <div>
      <VideoTitle title={randomMovie.original_title} overview={randomMovie.overview} id={randomMovie.id} />
      <VideoBackground id={randomMovie.id} />
    </div>
  );
};

export default MainContainer;
