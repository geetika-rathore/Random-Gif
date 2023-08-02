import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
    <div  className=" w-full relative min-h-screen mx-auto flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 ...   " >
<h1 className=" bg-white rounded-lg font-bold  text-3xl  w-11/12 text-center mt-[40px] ml-[15px] px-10 py-2 ">Ramdom GIF</h1>
<div className="flex flex-col  w-full items-center gap-y-10 mt-[30px] " >
  <Random />
  <Tag />
</div>
    </div>
  );
}
