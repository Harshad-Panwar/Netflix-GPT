
import React from "react";
import playIcon from "../utils/play.png";
import searchIcon from "../utils/search.png";
import useSelectedTrailer from "../customHooks/useSelectedTrailer";
import { useDispatch } from "react-redux";
import { setToggleMovieTrailer } from "../redux/movieSlice";
import { toggleShowGptSearch } from "../redux/gptSlice";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const VideoTitle = ({ title, overview, id }) => {

  const selectTrailer = useSelectedTrailer();
  const dispatch = useDispatch();
  const selectedlang = useSelector(store => store.appConfig.selectedLang);

  const handleClick = () => {
    selectTrailer(id);
    dispatch(setToggleMovieTrailer());
    // console.log(movie);
  };

  const handleShowGptSearch = () => {
    dispatch(toggleShowGptSearch());
  }

  // console.log("videoTile: " + id);

  return (
    <div className="w-full h-screen absolute">
      <div className="absolute w-1/3 sm:w-2/3 text-white top-96 sm:top-28 left-8 sm:left-3 py-8 sm:py-4 sm:px-3 px-6 bg-black rounded-2xl bg-opacity-20">
      <h1 className="text-3xl sm:text-sm font-bold pb-4 sm:pb-2">{title}</h1>
      <p className="text-sm font-semibold pb-4 sm:hidden">{overview}</p>
      <div className=" flex font-bold">
        <button
          className="bg-white text-black sm:text-[8px] py-2 px-10 sm:px-4 rounded-md mr-3 flex items-center hover:bg-opacity-80"
          aria-label="Play Video" onClick={handleClick}
        >
          <img className=" sm:w-3 w-6 mr-2 sm:hidden" src={playIcon} alt="Play Icon" />
          {lang[selectedlang].play}
        </button>
        <button
          className="bg-[#4e4e4e] py-2 px-10 sm:px-4 sm:text-[8px] rounded-md flex items-center bg-opacity-70 hover:bg-opacity-50"
          aria-label="More Information" onClick={handleShowGptSearch}
        >
          <img className="w-6 mr-2 sm:hidden" src={searchIcon} alt="Info Icon" />
          {lang[selectedlang].gptSearch}
        </button>
      </div>
    </div>
    </div>
  );
};

export default VideoTitle;
