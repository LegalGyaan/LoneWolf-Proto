"use client";
import { useState } from "react";
import Img from "next/image";
import cross from "@/Assets/cross.png";
export const Topics = ({ tag, filterHandler }) => {
  const handleClick = () => {
    setIsClicked(!isClicked);
    filterHandler(tag);
  };
  let [isClicked, setIsClicked] = useState(false);
  if (tag === "Trending") {
    return;
  }
  return (
    <div
      {...(isClicked && { style: { backgroundColor: "#34D399" } })}
      className=" m-2 rounded-full bg-slate-300 cursor-pointer px-4 py-2 hover:bg-green-400 hover:ease-in flex gap-2"
      onClick={handleClick}
    >
      {tag}
      {isClicked ? <Img src={cross} width={20} /> : undefined}
    </div>
  );
};
