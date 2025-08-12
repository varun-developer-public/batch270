import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log(seconds);
      
    }, 1000);
    return (
        ()=> {
            console.log("Removed")
            clearInterval(interval);
        }
    ) // Cleanup on unmount
  }, []);

  return (
    <>
    <h2>Time: {seconds} seconds</h2>

    </>
  )
}

export default Timer