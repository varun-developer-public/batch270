import Welcome from "./components/General/welcome"
import NavBar from "./components/Navbar/navbar"

function Home(){

    return (
        <>
            <NavBar a={50} b={20} c={50}/>
            <Welcome username={"Varun"}/>
        </>
    )
}

export default Home
