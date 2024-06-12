import React from "react";
import { useSelector } from "react-redux";

const MovieTrailer = () => {
    
    const trailer = useSelector((store) => store.movies.selectedMovie);
  
    const trailerID = !trailer ? "" : trailer.key;
  
    return (
      <div className=" w-screen h-screen">
        <iframe
          className=" w-screen h-screen"
          src={`https://www.youtube.com/embed/${trailerID}?showinfo=0`}
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default MovieTrailer
