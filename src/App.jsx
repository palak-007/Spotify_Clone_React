import React, { useContext } from 'react'
import SideBar from './Components/SideBar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar></SideBar>
        <Display></Display>
      </div>
      <Player></Player>

      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App