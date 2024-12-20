import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  timeout = timeout * 1000;
  const [remaningTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setting timeout")
    const TimeOutTimer = setTimeout(onTimeout, timeout);

    return ()=>{
        clearTimeout(TimeOutTimer)
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("setting interval")
     const timerInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => 
        prevRemainingTime - 100
      );
    }, 100);

    return ()=>{
        clearInterval(timerInterval);
    }

  }, []);
  return <progress id="quesstion-time" max={timeout} value={remaningTime} />;
}
