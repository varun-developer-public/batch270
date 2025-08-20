import { useEffect, useState } from "react";
import Welcome from "./components/General/welcome";
import NavBar2 from "./components/Navbar/NavBar2";
import ProductList from "./components/products/productList";
import "./index.css";
import Timer from "./components/General/timer";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./components/Dashboard/dashboard";
import Profile from "./components/Dashboard/profile";
import { AudioProvider } from "./context/AudioContent";
import SongList from "./components/AudioPlayers/SongList";
import PlayerControls from "./components/AudioPlayers/player";
import MusicPlayerSlider from "./components/AudioPlayers/player";
function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  });

  return (
    //   <>
    //  {/* {show && <Welcome username={"Vimal"}/>} */}
    //  {/* <Timer/>
    //   <Welcome/>
    //   <NavBar/>
    //   <ProductList/> */}
    //   </>

    // <UserProvider>
    //   <Dashboard />
    //   <br/>
    //   <Profile/>
    // </UserProvider>

    <AudioProvider>
      <div className="h-screen bg-black text-amber-50">
        <NavBar2 />
        <div>
          <h1>Songs to Play</h1>
          <SongList />
          <MusicPlayerSlider />
        </div>
      </div>
    </AudioProvider>
  );
}

export default Home;
