import React from "react";
import searchIcon from "../utils/search.png";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  
  const selectedlang = useSelector(store => store.appConfig.selectedLang);

  return (
    <div className="absolute w-full h-screen flex justify-center items-center">
      <div className=" w-full">
        <h1 className=" text-white font-bold text-center pb-4 text-4xl">{lang[selectedlang].gptSearchHeadind01}</h1>
        <h2 className=" text-white font-semibold text-center pb-6 text-lg">{lang[selectedlang].gptSearchHeadind02}</h2>
        <div className="w-full flex justify-center items-center gap-5">
      <input
        className=" w-1/3 px-3 py-4 rounded-lg bg-white bg-opacity-80 my-3 placeholder-black"
        placeholder={lang[selectedlang].gptSearchBarPlaceHolder}
      />
      <button
        className="w-32 bg-[#FA0100] py-4 text-white text-sm font-bold rounded-lg flex items-center justify-center hover:bg-opacity-80"
      >
        <img className="w-6 mr-2" src={searchIcon} alt="Info Icon" />
        {lang[selectedlang].search}
      </button>
      </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
