import { createContext, useRef, useState } from "react";

export const AudioContext = createContext()

export const AudioProvider = ({children})=>{
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef(new Audio())

    const playSong = (url)=>{
        audioRef.current.src = url;
        audioRef.current.play()
        setCurrentSong(url)
    }

    const pauseSong=()=>{
        audioRef.current.pause()
    }

    return(

        <AudioContext.Provider value={{currentSong,playSong,pauseSong}}>
            {children}
        </AudioContext.Provider>
    )
}