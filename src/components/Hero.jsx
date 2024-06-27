import React from "react";
import NavBar from "./NavBar";
import { CiLock, CiHeart, CiClock2 } from "react-icons/ci";
import CardImage from "../assets/images/card.png";

export const Hero = () => {
  return (
    <>
      <div className="relative h-screen bg-chuks bg-cover bg-fixed bg-center bg-no-repeat">
        <NavBar />
        <div className="flex h-[88vh] w-[54%] flex-col items-start justify-center gap-5 pl-20 text-white">
          <p className="font-krona text-[55px] font-bold leading-snug">
            List{" "}
            <span className="bg-gradient-to-br from-green-400 to-lime-600 bg-clip-text text-transparent">
              NFT
            </span>{" "}
            Get Paid in{" "}
            <span className="bg-gradient-to-br from-green-500 to-lime-600 bg-clip-text text-transparent">
              Seconds
            </span>
          </p>
          <p className="font-pregular text-[18.3px] font-extralight">
            Our platform allows you to{" "}
            <span className="font-bold">
              receive payment for your NFTs within seconds.
            </span>{" "}
            Trading digital assets has never been more efficient.
          </p>
          <div className="flex gap-5 font-pregular">
            <button className="rounded-lg border border-[#7DE226] bg-gradient-to-tr from-green-400 to-lime-600 px-6 py-3 capitalize text-white">
              sign up
            </button>
            <button className="text-[16px] capitalize text-[#ffffff] underline">
              See How It Works
            </button>
          </div>
          <div className="flex items-center gap-3">
            <CiLock className="text-[25px] text-green-400" />
            <p className="mr-2 font-pregular text-[13px]">
              Protected <br />
              Payment Gateway
            </p>
            <CiHeart className="text-[25px] text-green-400" />
            <p className="mr-2 font-pregular text-[13px]">
              Easy <br />
              to Use Platform
            </p>
            <CiClock2 className="text-[25px] text-green-400" />
            <p className="mr-2 font-pregular text-[13px]">
              Fast <br />
              Bank Transfers
            </p>
          </div>
        </div>
        <img
          src={CardImage}
          alt="card"
          className="absolute bottom-4 right-4 w-[270px] hover:w-[275px]"
        />
      </div>
    </>
  );
};



        



        




        


        

        
        
        
        
        









