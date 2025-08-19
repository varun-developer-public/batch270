import React, { useContext } from 'react'
import chikitu from '../../assets/songs/Chikitu.mp3'
import coolieDisco from '../../assets/songs/Coolie Disco.mp3'
import iamthedanger from '../../assets/songs/I Am The Danger.mp3'
import Kokki from '../../assets/songs/Kokki.mp3'
import { AudioContext } from '../../context/AudioContent'

const songs = [
    {id:1, songName: "Chikitu" , url: chikitu},
    {id:2, songName: "Coolie Disco" , url: coolieDisco},
    {id:3, songName: "I Am The Danger" , url: iamthedanger},
    {id:4, songName: "Kokki" , url: Kokki},
]

function SongList() {

    const {playSong} = useContext(AudioContext)
  return (
    <div>

        <h2>Songs List</h2>
        <ul>
            {songs.map((song)=>(
                <li key={song.id}>
                    {song.songName}{" "} <button onClick={()=>playSong(song.url)}>play</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SongList