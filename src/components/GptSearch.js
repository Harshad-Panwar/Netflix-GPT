import React from 'react';
import { Login_BG } from '../utils/constants';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    <div >
      <img
        className=" fixed w-full h-screen"
        src={Login_BG}
        alt="bg-img"
      />
      <div className="absolute bg-black opacity-70 w-full h-screen"></div>
      <div className='absolute w-full h-screen pt-32'>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  )
}

export default GptSearch;