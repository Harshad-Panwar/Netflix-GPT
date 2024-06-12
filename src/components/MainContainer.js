import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = ({randomNumber}) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const randomMovie = movies[randomNumber];

  // console.log(randomMovie);
  return (
    <div>
      <VideoTitle title={randomMovie.original_title} overview={randomMovie.overview} id={randomMovie.id} />
      <VideoBackground id={randomMovie.id} />
    </div>
  );
};

export default MainContainer;
