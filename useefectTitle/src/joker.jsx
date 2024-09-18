import { useEffect, useState } from "react";



function Joker () {
        const [joke,setjoke] = useState({});
    let url = 'https://official-joke-api.appspot.com/random_joke';
    let getJok = async () => {
        let response = await fetch(url);
        let data = await response.json();
        setjoke({setup:data.setup, punchline:data.punchline})
    }

    useEffect(() => {
        async function getfirstjoke ()  {
            let response = await fetch(url);
            let data = await response.json();
            setjoke({setup:data.setup, punchline:data.punchline})
    }
    getfirstjoke();
},[])

    return (
        <div className="comments-form flex h-screen flex-col gap-5 
        justify-center items-center align-middle bg-slate-500">

            <h1>{joke.setup}</h1>
            <h1>{joke.punchline}</h1>
            <button onClick={getJok}>New joke</button>
    </div>
    )
}

export default Joker