import React, { useEffect, useState} from "react";

import getGif from "../../services/getGif";
export default function Detail({ params }) {
    const { id } = params;
    const [gif, setGif] = useState({});
    


    useEffect(()=>{
        getGif({id}).then(gif=> {
            setGif(gif)
            console.log(gif)
        })
    }, [id]);

    return ( <>
        <h3>nombre: {gif.title}</h3>
        <h5>fecha: {gif.import_datetime}</h5>
        <p>usuario: {gif.username}</p>
        <img src={gif.url} alt="gif"></img>
    
    </>)

    
}