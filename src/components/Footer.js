import React from 'react';
import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';

const Footer = () => {

    const selectedlang = useSelector(store => store.appConfig.selectedLang);

  return (
    <div className=' absolute w-full text-center font-bold text-white bottom-0 bg-transparent'>
      <h1>{lang[selectedlang].note}</h1>
    </div>
  )
}

export default Footer
