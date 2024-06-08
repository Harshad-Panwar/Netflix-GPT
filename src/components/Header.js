import React from "react";
import logo from "../utils/Netflix_Logo_PMS.png"

const Header = ({setSignUp}) => {
  return (
      <div className=" bg-gradient-to-b from-black w-full absolute flex justify-around items-center pt-2 z-20">
        <img
          className=" w-44"
          src={logo}
          alt="logo"
        />
        <div className="flex gap-6">
          <button className=" w-20 bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg" onClick={()=>setSignUp(false)}>
            Sign In
          </button>
          <button className=" w-20 bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg" onClick={()=>setSignUp(true)} >
            Sign Up
          </button>
        </div>
      </div>
  );
};

export default Header;
