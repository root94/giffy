import React, { useContext, useEffect, useState } from "react";
import GifsContext from "../../context/GifsContext";
import Gif from "../Gif/Gif";
import getGif from "../../services/getGif";
export default function Detail({ params }) {
  const { id } = params;
  const [gif, setGif] = useState({});
  const { gifs } = useContext(GifsContext);

  useEffect(() => {
    setGif(
      gifs.find((sG) => sG.id === id) ||
        getGif({ id }).then((g) => {
          console.log(g, "aqui");
          setGif(g);
        })
    );
  }, [id, gifs]);
  console.log(gifs, "este");

  return (
    <>
      <img src={gif.url} alt="gif"></img>
    </>
  );

  /*   useEffect(()=>{
        getGif({id}).then(gif=> {
            setGif(gif)
            console.log(gif)
            console.log(gifsContext, 'este')
        })
    }, [id, gifsContext]); */

  /*   return ( <>
        <h3>nombre: {gif.title}</h3>
        <h5>fecha: {gif.import_datetime}</h5>
        <p>usuario: {gif.username}</p>
        <img src={gif.url} alt="gif"></img>
    
    </>) */
}
