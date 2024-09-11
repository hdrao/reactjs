import React from "react";
import './Lottery.css'
import { useState } from "react";
import { genticket } from "./lottery";

 function Lottery ({n,winCondition}) {
    const [tickets, setTickets] = useState(genticket(n));
       const isWin=winCondition(tickets) === 15;
       
       function refresh () {
        setTickets(genticket(n));
       }
              

    return (
       <div className="lottery">
        <h1>You will win if sum of numbers = 15</h1>
        <h2>{tickets}</h2>
        <button onClick={refresh}>Buy Ticket</button>
        <h3>{
        isWin ? "You Have won the match": "You lose"
        }</h3>
       </div>
    )

}




export default Lottery