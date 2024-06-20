import React, { useRef } from "react";
import searchIcon from "../utils/search.png";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_Options } from "../utils/constants";
import { addGptMovies } from "../redux/gptSlice";

const GptSearchBar = () => {
  const selectedlang = useSelector((store) => store.appConfig.selectedLang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getResultTMDBMovies =async (movieName) => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_Options);

      const json = await data.json();
      
      return json.results;
    
    } catch (error) {
      console.log(error);
    }
  }

  const handleGptSearch = async () => {

      // console.log(searchText.current.value);

      const query = `Act as an movie recomandation system, User wants to watch ${searchText.current.value} movies Provide 6 movies that fit user demand, strictly separated by commas and i am providing you an example strictly follow the same format of example and do not give any space between commas here is the example : Yeh Jawaani Hai Deewani,Dilwale Dulhania Le Jayenge,The Matrix,The Lion King,Inception`
    
      // const chatCompletion = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: query }],
      //   model: 'gpt-3.5-turbo',
      // });
      // //console.log(chatCompletion?.choices?.[0]?.message?.content);

      //const gptresult = chatCompletion?.choices?.[0]?.message?.content;

      const gptresult = "Bad Boys: Ride or Die,Boy Kills World,Fast X,Captain Marvel,Iron Man 2".split(",");

      const promiseArray = gptresult.map((movie) => getResultTMDBMovies(movie));
      
      const tmdbResults = await Promise.all(promiseArray);

      // console.log(tmdbResults);

      dispatch(addGptMovies({movieNames : gptresult, movieResults : tmdbResults}));
  }

  return (
      <div className=" w-full ">
        <h1 className=" text-white font-bold text-center pb-4 text-4xl sm:text-lg">
          {lang[selectedlang].gptSearchHeadind01}
        </h1>
        <h2 className=" text-white font-semibold text-center pb-6 text-lg sm:hidden">
          {lang[selectedlang].gptSearchHeadind02}
        </h2>
        <div className="w-full flex justify-center items-center gap-5 sm:gap-3">
          <input 
          ref={searchText}
            className=" w-1/3 sm:w-2/3 px-3 py-4 rounded-lg bg-white bg-opacity-80 my-3 placeholder-black sm:placeholder:text-xs"
            placeholder={lang[selectedlang].gptSearchBarPlaceHolder}
          />
          <button
            className="w-32 sm:w-28 bg-[#FA0100] py-4 text-white text-sm font-bold rounded-lg flex items-center justify-center hover:bg-opacity-80"
            onClick={handleGptSearch}
          >
            <img className="w-6 mr-2" src={searchIcon} alt="Info Icon" />
            {lang[selectedlang].search}
          </button>
        </div>
      </div>
  );
};

export default GptSearchBar;
