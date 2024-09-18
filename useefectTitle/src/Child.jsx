import {React, memo} from "react";
import { useState } from "react";

  function Hello () {
    let obj = {red:0, yellow:0,blue:0,green:0}; 
    const [move, setmove] = useState(obj);
    let [arrmove, setarrmove] = useState(["no moves"])
    function redmove () {
      setmove((prevval) => {
        return ({...prevval, red:prevval.red+1})
     })
     setarrmove([...arrmove,"red move"])
    }
    function yellowmove () {
      setmove({...move, yellow:move.yellow+1})
    }

    function bluewmove () {
      setmove({...move, blue:move.blue+1})
    }
    function greenwmove () {
      setmove({...move, green:move.green+1})
    }

return (
    <>
    <div>
      <p>{arrmove}</p>
      <p>red:{move.red}</p>
      <button onClick={redmove} style={{backgroundColor:"red",}}>+1</button>
      <p>yellow:{move.yellow}</p>
      <button  onClick={yellowmove} style={{backgroundColor:"yellow", color:"black"}}>+1</button>
      <p>blue:{move.blue}</p>
      <button onClick={bluewmove} style={{backgroundColor:"blue",color:"white"}}>+1</button>
      <p>green:{move.green}</p>
      <button onClick={greenwmove} style={{backgroundColor:"green",}}>+1</button>
    </div>
    </>
)
}


export default Hello