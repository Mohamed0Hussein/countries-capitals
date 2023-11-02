import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 
const CountryCapitalGame = ({data,stopTimer}) => {
    const nav = useNavigate()
    const [options,setOptions] = useState(shuffle([...Object.keys(data),...Object.values(data)]))
    const [stateOfColor,setColorState] = useState(shuffle([...Object.keys(data),...Object.values(data)]))
    const [selected,setSelected] = useState('')

    if(options.length === 0){
        stopTimer()
    }
    function checkAnswer(option){
       if(selected === ''){
        setSelected(option)
        setColorState({...stateOfColor,[option]:'Selected'})
       }
       else if (selected === option){
        setSelected('')
        setColorState({...stateOfColor,[option]:''})
       }
       else{
        if(option === data[selected] || selected === data[option]){
            setOptions(options.filter(opt => {
                return opt !== option && opt !== selected
            }))
            setSelected('')
        }
        else{
            setColorState({...stateOfColor,[option]:'Wrong',[selected]:'Wrong'})
            setTimeout(() => {
                setColorState({...stateOfColor,[option]:'',[selected]:''})
            },1000)
            setSelected('')
        }
       }
    }
  return (
    <div className='flex inline-block flex-wrap'>
        {options.length === 0 ?
        <div className='w-full text-center'>
            <p>Congratulations !! you WON.</p>
            <button className='bg-blue-500 py-2 px-5 m-2 rounded' onClick={() => {nav('/')}}>Try again</button>
        </div> 
        :
        <>
        {options.map((option,index) => {
            return(
                <button key={index} className={`m-1 py-2 px-5 rounded rounded-lg border-black border-2 w-content hover:text-white text-2xl ${stateOfColor[option] === 'Selected' ? 'bg-[#009bff] border-[#00FF00]': stateOfColor[option] === 'Wrong' ? 'bg-red-500' : 'bg-gray-500' }`} 
                onClick={() => checkAnswer(option)}>{option}</button>
            )
        })}</>}      
    </div>
  )
}
export default CountryCapitalGame