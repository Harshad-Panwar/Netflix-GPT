import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);

  const trailer = useSelector((store) => store.movies.movieTrailer);

  const trailerID = !trailer ? "" : trailer.key;

  return (
    <div>
      <iframe
        className=" w-screen h-screen"
        src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&showinfo=0&loop=1&playlist=${trailerID}`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
