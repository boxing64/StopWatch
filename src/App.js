import './App.css';
import { useEffect, useState } from "react";

function App() {
const [time, setTime] = useState (0)
const [running, setRuning] = useState(false)
useEffect(() =>{
  let interval;
  if(running) {
interval = setInterval(() => {
  setTime((prevTime) => prevTime + 10);
},10 );
  } else if (!running){
    clearInterval(interval);
  }
return() => clearInterval(interval);
}, [running]);
  return (
    < div className='bg-teal-200 flex flex-col items-center justify-center py-8'>
    <h1 className='text-2xl font-semibold '>01-Stopwatch</h1>
    <div className='text-xl font-semibold py-4'>
      <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time /1000)% 60)).slice(-2)}:</span>
      <span>{("0" + ((time /10) %100)).slice(-2)}</span>
    </div>
<div className='  w-1/6 flex flex-row justify-between'>
  {running ? (
  
  <button className=' bg-red-400 border rounded-lg py-1 px-2.5  ' onClick={()=>{setRuning(false)}}>Stop</button>
  ) : (
    <button  className=' bg-green-400 border rounded-lg py-1 px-3' onClick={()=>{setRuning(true)}}>Start</button> )
  
}
  

  <button className=' bg-red-400 border rounded-lg py-1 px-2.5' onClick={()=>{setTime(0)}}>Reset</button>
</div>

</div>

  );
}

export default App;



