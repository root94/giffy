import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs"
import GifsContext from '../context/GifsContext'
export default function useGifs({ keyword } = {keyword : null}) {
  const {gifs, setGifs} = useContext(GifsContext)
  const [cargando, setCargando] = useState(false);
  
  useEffect(() => {
    // --> useEffect se ejecuta cada vez que se renderiza el componente (cuando cambia el estado o las prop)
    setCargando(true);
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setCargando(false);
      localStorage.setItem('lastKeyword', keywordToUse)  
     
    });
  }, [ keyword, setGifs]); // --> el segundo parametro '[]' son las dependencias, al ser un array vacío no hay dependencias y se ejecuta una sola vez (la primera q renderiza)
  return { cargando, gifs };
}
