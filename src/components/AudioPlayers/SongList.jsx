import React, { useContext } from "react";
import { AudioContext } from "../../context/AudioContent";

function SongList() {
  const { playSong,songs } = useContext(AudioContext);
  return (
    <div>
      <h2 className="my-5">Songs List</h2>
      <ul className="ms-5">
        {songs.map((song) => (
          <li key={song.id}>
           <div className="h-30 max-w-60 flex justify-center gap-7">
             {song.songName}{" "}
            <img src={song.thumbnail} alt="" style={{ height: "50px" }} />
            <button onClick={() => playSong(song.id)}>play</button>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
