import { useEffect, useState } from "react";
import ProductItem, { ButtonComponent } from "../products/productItem";

function Welcome({username}) {
   const [user,setUser] = useState('default')
   const [demo,setDemo] = useState('default')
  useEffect(()=>{

    console.log(user);
    return 
  },[user,demo])

function demodemo(){
  setDemo('demo')
}
  return (
 <>
    <div onClick={demodemo}>
      Welcome {user},Kumar
    </div>
    <div onClick={()=>setDemo("demo")}>
      Welcome {demo},Kumar
    </div>
 </>
  )
}

export default Welcome