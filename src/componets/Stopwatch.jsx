import React, { useState } from 'react'
import "../componets/stopStyle.css"

const Stopwatch = (props) => {

    const [timerId ,setTimerId] = useState(null)
    const [watch ,setWatch ] = useState(props.second);

    const start =() => {
        if(!timerId){
            let id = setInterval(() => {
               setWatch((prev)=> prev +1); 

            }, 1000);
            setTimerId(id)
        };

    }
    const pause =() => {
        clearInterval(timerId);
        setTimerId(null)
    }
    const reset =() => {
        clearInterval(timerId);
        setWatch(0);
        setTimerId(null)
    }
  return (
    <div id="timmer">
      <div>StopWatch</div>
      <div> <snap>{watch}</snap> sec</div>
      <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
