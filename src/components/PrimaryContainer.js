import React from 'react'
import MainContainer from './MainContainer'

const PrimaryContainer = () => {
    const randomNumber = Math.floor(Math.random() * 20);
  return (
    <div>
      <MainContainer randomNumber={randomNumber} />
    </div>
  )
}

export default PrimaryContainer
