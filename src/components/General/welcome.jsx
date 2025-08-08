import { useEffect, useState } from "react";
import { ButtonComponent } from "../products/productItem";

function Welcome({username}) {

    // let [user,setUser] = useState("Varun")
    
  // useEffect(()=>{

  //     // let user = "Varun";
  //   console.log(user);//Varun

  //   console.log(user);//Varun
    
    
  //   setUser("Vimal")
  //   console.log(user);//Vimal
  // })

  return (
    <div>Welcome {username}
    <ButtonComponent>Hiiiii</ButtonComponent></div>
  )
}

export default Welcome