import React from 'react'

export default function Button() {
    let count = 0;
    const btnClick = (e)=>e.target.textContent = "Hello Dinindu!"
        

    

  return (
    <div>

        <button onClick={(e)=>btnClick(e)}>Click Me!</button>


    </div>
  )
}
