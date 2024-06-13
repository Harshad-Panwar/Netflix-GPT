
import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);

  const trailer = useSelector((store) => store.movies.movieTrailer);

  const trailerID = !trailer ? "" : trailer.key;

  // console.log("Videobg : " + id)

  return (
    <div className=" w-screen h-screen">
      <iframe
        className=" w-[160vw] h-[130vh] z-10 -mt-32 ml-[-28rem] pointer-events-none overflow-hidden"
        src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerID}`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
