import React from 'react'
import ProfilePicture from './profile.jpeg'



export default function Card() {
  return (
    <div>
       <div  className='card'>

        <img  className="card-img" src={ProfilePicture} alt ="Profile Picture"></img>
        <h2 className='card-title'>Dinindu Akalnka</h2>
        <p className='card-txt'>Hello I'm Dinindu Akalnka Computer Science undergratuate at University of Jaffna.</p>
        
      </div> 
       
    </div>
  )
}



