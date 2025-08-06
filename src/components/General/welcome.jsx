import { useEffect, useState } from "react";

function Welcome({username}) {

    let [user,setUser] = useState("Varun")
    
  useEffect(()=>{

      // let user = "Varun";
    console.log(user);//Varun

    console.log(user);//Varun
    
    
    setUser("Vimal")
    console.log(user);//Vimal
  })

  return (
    <div>Welcome {user}</div>
  )
}

export default Welcome