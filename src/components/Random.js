import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {

const {gif,loading,fetchData} = useGif();

  return (
    <div className=" flex flex-col w-1/2 mt-[15px] items-center rounded-md bg-transparent gap-y-5 border border-b-gray-50 justify-center hover:bg-gradient-to-r from-blue-300 to-cyan-400 ... shadow-lg">
      <h1 className=" text-bold text-2xl uppercase text-black  mt-[30px] ">
        A Random GIF
      </h1>
      {
        loading ?
         (<Spinner />) : (

          <img src={gif} width="450px"  className=" rounded-lg "
          height={300}
          />
        ) 
      }
      <button
        className="w-10/12 mb-[20px]  border border-bg-gray-500 text-lg py-2 rounded-lg hover:bg-black text-white transition-all duration-200 "
        onClick={()=>{
          fetchData();
        }}
      >
        Generate
      </button>
    </div>
  );
}
