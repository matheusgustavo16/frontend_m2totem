'use client'

import { useEffect, useState } from "react";

export default function CountdownComponent({
  seconds,
  onFinish
}:{
  seconds: number|null;
  onFinish: () => void;
}){
  const [timeLeft, setTimeLeft] = useState<number|any>(null);

  useEffect(()=>{
    if(seconds && !timeLeft) setTimeLeft(seconds)
  }, [seconds]);

  useEffect(() => {
    if(timeLeft===0){
       console.log("TIME LEFT IS 0");
       onFinish();
       setTimeLeft(null);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (<>
    <span className="text-9xl pt-16 select-none font-extrabold">{timeLeft}</span>
  </>);
}