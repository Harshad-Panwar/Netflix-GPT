
import React from "react";
import playIcon from "../utils/play.png";
import infoIcon from "../utils/info.png";
import useSelectedTrailer from "../customHooks/useSelectedTrailer";
import { useDispatch } from "react-redux";
import { setToggleMovieTrailer } from "../redux/movieSlice";

const VideoTitle = ({ title, overview, id }) => {

  const selectTrailer = useSelectedTrailer();
  const dispatch = useDispatch();

  const handleClick = () => {
    selectTrailer(id);
    dispatch(setToggleMovieTrailer());
    // console.log(movie);
  };

  // console.log("videoTile: " + id);

  return (
    <div className="w-full h-screen absolute">
      <div className="absolute w-1/3  text-white bottom-0 left-8 py-8 px-6 bg-black rounded-3xl bg-opacity-20">
      <h1 className="text-3xl font-bold pb-4">{title}</h1>
      <p className="text-sm font-semibold pb-4">{overview}</p>
      <div className=" flex font-bold">
        <button
          className="bg-white text-black py-2 px-10 rounded-md mr-3 flex items-center hover:bg-opacity-80"
          aria-label="Play Video" onClick={handleClick}
        >
          <img className="w-6 mr-2" src={playIcon} alt="Play Icon" />
          Play
        </button>
        <button
          className="bg-[#4e4e4e] py-2 px-10 rounded-md flex items-center bg-opacity-70 hover:bg-opacity-50"
          aria-label="More Information"
        >
          <img className="w-6 mr-2" src={infoIcon} alt="Info Icon" />
          More Info
        </button>
      </div>
    </div>
    </div>
  );
};

export default VideoTitle;
