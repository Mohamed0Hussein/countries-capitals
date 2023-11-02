import React, { useEffect, useState } from 'react';

const Timer = ({isRunning}) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const time = <>{minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</>

  return (
    <div className='font-bold text-8xl mt-10'>
      {isRunning ? time : <></>}
    </div>
  );
};

export default Timer;
