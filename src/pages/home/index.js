import React from "react";
import { Link } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Search from "../../components/Search/Search"
import UseGifs from "../../hooks/useGifs"

const POPULAR_GIFS = ["perros", "gatos", "pandas", "mapaches", "conejos"];

export default function Home() {

  const {gifs} = UseGifs()

  return (
    <>
      <Search></Search>
      <h3>Última búsqueda</h3>
      <ListOfGifs gifs={gifs}></ListOfGifs>
      
      <h3>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => {
          return (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
