import React from "react";
import navLogo from "../assets/images/Logo.png";

function NavBar() {
  return (
    <nav className="flex cursor-pointer items-center justify-between border-b-2 border-b-[#333741] bg-[#101828] px-20 py-[18px] font-pregular">
      <ul className="flex h-full items-center justify-center gap-7 text-white">
        <img src={navLogo} alt="Crocs Logo" className="mr-3" />
        <li className="hover:text-[#7DE226]">How it Works</li>
        <li className="hover:text-[#7DE226]">Buyers</li>
        <li className="hover:text-[#7DE226]">Sellers</li>
        <li className="hover:text-[#7DE226]">Pricing</li>
        <li className="hover:text-[#7DE226]">About</li>
        <li className="hover:text-[#7DE226]">Blog</li>
      </ul>
      <div className="flex gap-6 text-sm">
        <button className="text-[16px] capitalize text-green-400 underline">
          log in
        </button>
        <button className="rounded-lg border border-[#7DE226] bg-gradient-to-tr from-green-400 to-lime-600 px-5 py-2 capitalize text-white">
          sign up
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
