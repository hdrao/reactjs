import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
function App () {
  let [fromData,setformData] = useState({
    fullname:"",
    userName:""
  })
  let handle = (event) => {
    
   setformData( (currData)=> {
      return {...currData, [event.target.name]:event.target.value}
   })

   

  return (
    <div className="app ">
      <form action="" onSubmit={(event)=>{event.preventDefault()}}>
        <label htmlFor="fullname">Full Name
        </label>
        <input type="text"
         value={fromData.fullname} 
         onChange={handle}
         id="fullname"
         placeholder="Enter your name"
         name="fullname"
         />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}}

export default App