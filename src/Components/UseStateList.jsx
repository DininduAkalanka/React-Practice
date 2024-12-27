import React, { useState } from 'react'

export default function UseStateList() {

    const [cars ,setCars] = useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const[carMake,setCarMake] = useState("");
    const[carModel,setCarModel] = useState("");

    function handleAddCar(e) {
        e.preventDefault();
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars((cars) => [...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
      }

    function handleRemoveCar(index){

    }
    function handleYearChange(e){

        setCarYear(e.target.value);

    }
    function handleMakeChange(e){
        setCarMake(e.target.value);
    }
    function handleModelChange(e){
        setCarModel(e.target.value)

    }



  return (
    <div>
    <h1>List of Cars</h1>
    <ul>
      {cars.map((car, index) => (
        <li key={index}>
          {car.year} {car.make} {car.model}{" "}
          <button onClick={() => handleRemoveCar(index)}>Remove</button>
        </li>
      ))}
    </ul>
    <form>
      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        min="1886"  max="2025"// Year of the first car invention
      />
      <br />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />
      <br />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />
      <br />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </form>
  </div>
  )
}
