import React from 'react'
import { Link } from "wouter";
import "../ListOfGifs/ListOfGifs.css"

export default function Gif({title,id,url}) {
    return (

      <Link to={`/gif/${id}`}> 
           
            <img src={url} alt={title} className="imagen"/>
          </Link>
    )
}