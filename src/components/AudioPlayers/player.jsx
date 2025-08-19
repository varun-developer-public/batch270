import React, { useContext } from 'react'
import { AudioContext } from '../../context/AudioContent'

function PlayerControls() {
    const {currentSong,pauseSong} = useContext(AudioContext)
  return (
    <div>
        <h2>Now Playing</h2>
        {currentSong}

    </div>
  )
}

export default PlayerControls