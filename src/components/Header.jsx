import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center w-6xl mx-auto p-3 ">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Real</span>
          <span className=" text-slate-800">Estate</span>
        </h1>
        <ul className="flex gap-4 sm:gap-10 font-bold">
            <Link to={'/'}><li className="  text-slate-700">Home</li></Link>
            <Link to={'/about'}><li className="text-slate-700">About</li></Link>
            <Link to={'/login'}> <li className="text-slate-700">Login</li></Link>
         
        
        </ul>
        <form className="flex items-center bg-slate-100 p=3 rounded-lg">
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-600" />
        </form>
      </div>
    </header>
  );
}
