import { createContext, useRef, useState } from "react";

import chikitu from "../assets/songs/Chikitu.mp3";
import coolieDisco from "../assets/songs/Coolie Disco.mp3";
import iamthedanger from "../assets/songs/I Am The Danger.mp3";
import Monica from "../assets/songs/Monica.mp3";
import chikitu_img from "../assets/img/chikitu-thumbnail.jpeg";
import coolieDisco_img from "../assets/img/coolie-disko-thumbnail.jpeg";
import iamthedanger_img from "../assets/img/iamthedanger-thumbnail.jpeg";
import monica_img from "../assets/img/monica-thumbnail.jpeg";

const songs = [
    { id: 0, songName: "Chikitu", url: chikitu, thumbnail: chikitu_img },
    {
        id: 1,
        songName: "Coolie Disco",
        url: coolieDisco,
        thumbnail: coolieDisco_img,
    },
    {
        id: 2,
        songName: "I Am The Danger",
        url: iamthedanger,
        thumbnail: iamthedanger_img,
    },
    { id: 3, songName: "Monica", url: Monica, thumbnail: monica_img },
];

export const AudioContext = createContext()

export const AudioProvider = ({children})=>{
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef(new Audio())

    const playSong = (id)=>{
        audioRef.current.src = songs[id].url;
        audioRef.current.play()
        setCurrentSong(songs[id])
    }

    const pauseSong=()=>{
        audioRef.current.pause()
    }

    const prevSong = ()=>{
        const prevIndex = currentSong.id == 0 ? songs.length - 1 : currentSong.id - 1
        playSong(prevIndex)
    }
    const nextSong =()=>{
        const nextIndex = (currentSong.id == songs.length - 1)? 0 : currentSong.id + 1
        playSong(nextIndex)
    }
    return(

        <AudioContext.Provider value={{currentSong,playSong,pauseSong,songs,prevSong,nextSong}}>
            {children}
        </AudioContext.Provider>
    )
}