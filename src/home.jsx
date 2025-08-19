import { useEffect, useState } from "react";
import Welcome from "./components/General/welcome";
import NavBar from "./components/Navbar/navbar";
import ProductList from "./components/products/productList";
import "./index.css";
import Timer from "./components/General/timer";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./components/Dashboard/dashboard";
import Profile from "./components/Dashboard/profile";
import { AudioProvider } from "./context/AudioContent";
import SongList from "./components/AudioPlayers/SongList";
import PlayerControls from "./components/AudioPlayers/player";
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

      <div>
        <h1>Songs to Play</h1>
        <SongList/>
        <PlayerControls/>
      </div>
    </AudioProvider>
  );
}

export default Home;
