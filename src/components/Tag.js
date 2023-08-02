import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag,setTag] =useState("");
const {gif,loading,fetchData}= useGif(tag);
  return (
    <div className=" flex flex-col w-1/2 mt-[15px] mb-[30px] items-center rounded-md bg-transparent gap-y-5 border border-b-gray-50 justify-center hover:bg-gradient-to-r from-blue-300 to-cyan-400 ... shadow-lg">
      <h1 className=" text-bold text-2xl uppercase text-black  mt-[30px] ">
        A {tag} GIF
      </h1>
      {
        loading ?
         (<Spinner />) : (

          <img src={gif} width="450px"  className=" rounded-lg "
          height={300}
          />
        ) 
      }

      <input type="text" className="w-10/12 text-lg py-2  bg-transparent border ring-1 text-center text-black rounded-lg "
         placeholder="Search your Desired GIF"
       value={tag} onChange={(event)=>{
        setTag(event.target.value);
       }}
      />
      <button
        className="w-10/12 mb-[20px]  border border-bg-gray-500 text-lg py-2 rounded-lg hover:bg-black text-white transition-all duration-200 "
        onClick={()=>{
          fetchData(tag);
        }}
      >
        Generate
      </button>
    </div>
  );
}
