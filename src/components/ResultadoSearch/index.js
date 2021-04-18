import React from "react";
// import "./ListOfGifs.css";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../ListOfGifs/ListOfGifs"

export default function ResultadoSearch({ params }) {
  const { keyword } = params;
  const { cargando, gifs} = useGifs({ keyword });
console.log(cargando)
  return (
    <>
      {cargando ? (
        <p>cargando...</p>
      ) : (
          <ListOfGifs gifs={gifs}></ListOfGifs>
      )}
    </>
  );
}
