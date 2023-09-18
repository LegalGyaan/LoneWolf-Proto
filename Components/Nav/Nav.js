"use client";
import Image from "next/image";

import headImg from "@/Assets/1.png";
import Link from "next/link";
import TemporaryDrawer from "../hamburger";

const Nav = () => {
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
          <TemporaryDrawer />
        </div>
      </div>
      <hr className="border-[2px] border-black mb-8"></hr>
    </nav>
  );
};

export default Nav;
