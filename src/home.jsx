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
import Forms from "./components/Forms/forms";
import Post from "./components/General/post";
import PostList from "./components/General/postList";
import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./pages/homeDashboard";
import NavBar from "./components/Navbar/navbar";
import PostDetail from "./components/General/postDetail";
import ProtectedRoute from "./components/General/protectedRoute";
import LoginPage from "./components/General/login";
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

    // <AudioProvider>
    //   <div className="h-screen bg-black text-amber-50">
    //     <NavBar2 />
    //     <div>
    //       <h1>Songs to Play</h1>
    //       <SongList />
    //       <MusicPlayerSlider />
    //     </div>
    //   </div>
    // </AudioProvider>

    // <Forms/>
    <>
      <NavBar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404</h1>} />

        <Route element={<ProtectedRoute />} >
                  <Route path="/" element={<HomeDashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/postList" element={<PostList />} />
                  <Route path="/postDetail/:index" element={<PostDetail />} />
                  <Route path="/createPost" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
}

export default Home;
