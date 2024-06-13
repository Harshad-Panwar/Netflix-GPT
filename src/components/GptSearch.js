import React from 'react';
import { Login_BG } from '../utils/constants';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    <div >
      <div className=" absolute bg-black opacity-70 w-full h-screen"></div>
      <GptSearchBar />
      <GptMovieSuggestion />
      <img
        className=" w-full h-screen"
        src={Login_BG}
        alt="bg-img"
      />
    </div>
  )
}

export default GptSearch;