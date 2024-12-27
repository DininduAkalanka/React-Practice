import React, { useState } from 'react';

export default function UseStateArrayUsing() {

    const [food, setFood] = useState(["Apple", "Mango", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("FoodInput").value.trim(); // Get input value and trim whitespace

        // Validate the input
        if (!newFood) {
            alert("Please enter a valid food name.");
            return;
        }

        // Clear the input field and update state
        document.getElementById("FoodInput").value = "";
        setFood([...food, newFood]);
    }

    function handleRemoveFood(index) {
        const updatedFoodList = food.filter((_, i) => i !== index); // Remove item by index
        setFood(updatedFoodList);
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((foodItem, index) => (
                    <li key={index}>
                        {foodItem} 
                        <button onClick={() => handleRemoveFood(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type="text" id="FoodInput" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}
