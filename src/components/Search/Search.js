import React, { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Search(){
    const [keyword, setKeyword] = useState("");
    const [path, pushLocation] = useLocation();

    const handleSubmit = (evt) => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
      };
      const handleChange = (evt) => {
        setKeyword(evt.target.value);
      };


    return <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..."></input>
          </form>
}