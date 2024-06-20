
import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);

  const trailer = useSelector((store) => store.movies.movieTrailer);

  const trailerID = !trailer ? "" : trailer.key;

  // console.log("Videobg : " + id)

  return (
    <div className=" w-screen -mt-32 -mb-20 sm:-mt-6 sm:-mb-0">
      <iframe
        className="w-screen aspect-video pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerID}`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
