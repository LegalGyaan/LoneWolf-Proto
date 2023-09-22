"use client";
import Image from "next/image";

import headImg from "@/Assets/1.png";
import Link from "next/link";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Img from "next/image";
import down from "@/Assets/down.png";

const Nav = () => {
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <nav>
      <div className="fixed h-fit w-full bg-[#000000] flex items-center justify-between px-36 py-3 text-white">
        <div>
          <Link href="/">
            <Image src={headImg} width={200} alt="Picture of the author" />
          </Link>
        </div>
        <div className="flex gap-10 items-center text-base">
          <a className="hover:text-yellow-200" href="#">
            About Us
          </a>
          <a className="hover:text-yellow-200" href="#">
            FAQs
          </a>
          <a className="hover:text-yellow-200" href="#">
            Helpline
          </a>

          <button className="rounded-full font-bold bg-green-600 p-2 text-white hover:bg-green-700 hover:ease-in">
            Legal Aid Services
          </button>
          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            size="small"
            className="text-white"
          >
            <InputLabel
              className="text-white flex"
              id="demo-select-small-label"
            >
              Language
              <div className="w-[20px] mt-2 ml-2">
                <Img src={down} width={100} alt="Picture of the author" />
              </div>
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={language}
              label="Language"
              onChange={handleChange}
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
              <MenuItem value={"Assamese"}>Assamese</MenuItem>
              <MenuItem value={"Bengali"}>Bengali</MenuItem>
              <MenuItem value={"Nepali"}>Nepali</MenuItem>
              <MenuItem value={"Maithili"}>Maithili</MenuItem>
              <MenuItem value={"Malayalam"}>Malayalam</MenuItem>
              <MenuItem value={"Marathi"}>Marathi</MenuItem>
              <MenuItem value={"Odia"}>Odia</MenuItem>
              <MenuItem value={"Sanskrit"}>Sanskrit</MenuItem>
              <MenuItem value={"Shona"}>Shona</MenuItem>
              <MenuItem value={"Sindhi"}>Sindhi</MenuItem>
              <MenuItem value={"Tamil"}>Tamil</MenuItem>
              <MenuItem value={"Telugu"}>Telugu</MenuItem>
              <MenuItem value={"Urdu"}>Urdu</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <hr className="border-[2px] border-black mb-8"></hr>
    </nav>
  );
};

export default Nav;
