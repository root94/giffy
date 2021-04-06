import React from "react";
import { Link } from "wouter";
import Search from "../../components/Search/Search"
const POPULAR_GIFS = ["perros", "gatos", "pandas", "mapaches", "conejos"];

export default function Home() {


  return (
    <>
      <Search></Search>
      
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
