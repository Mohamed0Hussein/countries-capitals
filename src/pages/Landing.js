import React from 'react'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
    const nav = useNavigate()
    function navigateToGameScreen(){
        nav('/game') 
    }
  return (
    <div className='h-screen flex items-center justify-center'>
        <button className='bg-blue-600 py-1 px-4 hover:bg-blue-400 rounded rounded-lg' onClick={navigateToGameScreen}>Start Game</button>
    </div>
  )
}

export default Landing