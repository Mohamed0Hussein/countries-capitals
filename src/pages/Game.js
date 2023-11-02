import React, { useState } from 'react';
import { CountryCapitalGame, Timer } from '../components';

const Game = () => {
  
  const [timerRunning, setTimerRunning] = useState(true);

  function stopTimer(){
    setTimerRunning(false)
  }
  return (
    <div className='flex items-center flex-col'>
      <Timer isRunning={timerRunning}/>
      <div className='border w-full my-4 mx-2'>
        <CountryCapitalGame stopTimer={stopTimer} data={{Germany:'Berlin',Egypt:'Cairo',United_States_of_America:'Washington DC',Palestine:'Jerusalem',France:'Paris',Denmark:'Copenhagen',Turkey:'Ankara',Russia:'Moskow',Spain:'Madrid',China:'Bejing',India:'New Delhi',Canada:'Ottawa',Sweden:'Stockholm',Italy:'Rome'}}/>
      </div>
    </div>
  );
};
export default Game