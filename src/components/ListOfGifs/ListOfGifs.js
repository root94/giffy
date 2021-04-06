import React, { useEffect, useState } from "react";
import Gif from "../Gif/Gif";
import getGifs from "../../services/getGifs";
import "./ListOfGifs.css"

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    // --> useEffect se ejecuta cada vez que se renderiza el componente (cuando cambia el estado o las prop)
    setCargando(true);
    getGifs({ keyword }).then((gifs) => {setGifs(gifs); setCargando(false)});
  }, [keyword]); // --> el segundo parameteo '[]' son las dependencias, al ser un array vacío no hay dependencias y se ejecuta una sola vez (la primera q renderiza)

if(cargando){
    return <p>Cargando...</p>
}


  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <div className="item">
        <Gif key={id} title={title} url={url} id={id} />
        </div>
      ))}
    </div>
  );
}
