import { useEffect, useState } from "react"
import Welcome from "./components/General/welcome"
import NavBar from "./components/Navbar/navbar"
import ProductList from "./components/products/productList"
import './index.css'
import Timer from "./components/General/timer"
function Home(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setShow(true)
    }, 5000);
  })

    return (
        <>
       {/* {show && <Welcome username={"Vimal"}/>} */}
       <Timer/>
        {/* <Welcome/>
        <NavBar/>
        <ProductList/> */}
        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      
    </span>
  </div>
  <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
        </>
    )
}

export default Home
