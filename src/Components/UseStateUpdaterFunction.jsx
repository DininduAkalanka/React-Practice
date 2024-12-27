import React, { useState } from 'react'

export default function () {

    const [car,setCar]=useState({year:2024,make:"Ford",Model:"Mustang"});

    function handdleYearChange(e){

        setCar(c=>({...c,year:e.target.value}));

    }
    function handdleMakeChange(e){
        setCar(c=>({...c,make:e.target.value}));

    }
    function handdleModelChange(e){

        setCar({...car,Model:e.target.value});


    }
  return (
    <div>

        <h2>My Favourite Car is : {car.year} {car.make} {car.Model}</h2>

        <form>
            <label>Update Car Year  </label>
            <input type='number' value={car.year} onChange={handdleYearChange}></input><br></br><br></br>

            <label>Update Car Company  </label>
            <input type='text' value={car.make} onChange={handdleMakeChange}></input><br></br><br></br>

            <label>Update Car Model  </label>
            <input type='text' value={car.Model} onChange={handdleModelChange}></input><br></br><br></br>
        </form>


    </div>
  )
}
