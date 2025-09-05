import { lazy, Suspense, useEffect, useState } from "react";
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

const HomeDash = lazy(() => import("./pages/homeDashboard"));
const Dash = lazy(() => import("./components/Dashboard/dashboard"));
const PostListt = lazy(() => import("./components/General/postList"));

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
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>404</h1>} />

          {/* <Route element={<ProtectedRoute />} >
                  <Route path="/" element={<HomeDash/>} />
                  <Route path="/dashboard" element={<Dash/>} />
                  <Route path="/postList" element={<PostListt />} />
                  <Route path="/postDetail/:index" element={<PostDetail />} />
                  <Route path="/createPost" element={<Post />} />
        </Route> */}

          <Route path="/" element={<HomeDash />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/postList" element={<PostListt />} />
          <Route path="/postDetail/:index" element={<PostDetail />} />
          <Route path="/createPost" element={<Post />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Home;
