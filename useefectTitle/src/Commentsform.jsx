import { fromJSON } from "postcss"
import { useState } from "react"


function Commentsform () {

    let [formData, setformData] = useState({
        userName:"",
        remarks:"",
        rating:1
    })

    let handleInput = (event) => {
        setformData(()=>{
            return {...formData,[event.target.name]:event.target.value}
        })
    }

    let handlesubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    }
    return (
        <form onSubmit={handlesubmit}>
        <div className="comments-form flex h-screen flex-col gap-5 
        
        justify-center items-center align-middle bg-slate-500">
            <h1 className="">comment here</h1>
            <input type="text" placeholder="username"  value={formData.userName} onChange={handleInput} name="userName"/>
            <input type="number" placeholder="rating" min={1} max={4} value={formData.rating} onChange={handleInput}  name="rating" />
            <textarea name="remarks" id="" placeholder="comments here"  value={formData.remarks} onChange={handleInput}  ></textarea>
            <button className="">submit</button>
        </div>
        </form>
    )
}


export default Commentsform