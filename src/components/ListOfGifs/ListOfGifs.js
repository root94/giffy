import React from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";

export default function ListOfGifs({ gifs }) {
 
 
  return (
    <>
        
     
         <div className="ListOfGifs">
          {gifs.map(({ id, title, url }) => (
            <div className="item">
              <Gif key={id} title={title} url={url} id={id} />
            </div>
          ))}
        </div>  
     
    </>
  );
}
