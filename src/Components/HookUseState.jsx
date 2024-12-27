import React, { useState } from 'react'

export default function () {

    const [name,setName]=useState("Dinindu");
    const [age,setAge]=useState(0);
    const [isEmployed,setIsEmployed]=useState(false);

    const [orderName,setorderName]=useState(" ");
    const [quantity,setQuantity]=useState(1);

    const [comment,setComment]=useState(" ");

    const [payment,setPayment]=useState("");

    function Handdlepayment(e){
        setPayment(e.target.value);
    }
    function commentHandle(e){
        setComment(e.target.value);
    }

    function handleNameChange(e){

        setorderName(e.target.value);

    }

    function qtyChange(e){

        setQuantity(e.target.value);

    }



    const btnClick=()=>{

        setName(name+"Akalanka");



    }

    const updateAge = ()=>{
        setAge(age+1);
    }

    const toggleEmployeeStatus = ()=>{

        setIsEmployed(!isEmployed);

    }
    const reset = ()=>{
        setAge(0);
    }


  return (
    <div>
        <h1>Name : {name}</h1>
        <button onClick={btnClick}>SetName</button>
        <h1>Age: {age}</h1>
        <button onClick={updateAge}> Update Age</button>
        <button onClick={reset}>Reset</button>

        <h1>Is Employed : {isEmployed ? "Yes":"NO"}</h1>
        <button onClick={toggleEmployeeStatus}>Is Employed</button>

        <h1>Order Name : {orderName}</h1>
        <input type='text' value={orderName} onChange={handleNameChange}></input>

        <h2>Comment :{comment}</h2>
        <textarea value={comment} onChange={commentHandle} placeholder="Comment Here"></textarea><br></br>
        <select value={payment} onChange={Handdlepayment}>
            <option value="">Select Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Voucher">Voucher</option>
        </select>
        <h2>Payment Method : {payment}</h2>


            


        </div>
  )
}
