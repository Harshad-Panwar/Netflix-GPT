import React from 'react';
import { Login_BG } from '../utils/constants';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    <div>
      <img
        className="fixed w-full h-screen object-cover"
        src={Login_BG}
        alt="bg-img"
      />
      <div className="absolute bg-black opacity-70 w-full h-screen"></div>
      <div className="absolute w-full h-screen flex items-center justify-center">
        <div className="w-full px-4 sm:px-2 text-center">
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
      </div>
    </div>
  );
}

export default GptSearch;
