import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center w-6xl mx-auto p-3 ">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Real</span>
          <span className=" text-slate-800">Estate</span>
        </h1>
        <ul className="flex gap-4 sm:gap-10 font-bold">
          <Link to={"/"}>
            <li className="  text-slate-700">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="text-slate-700">About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
       
      </div>
    </header>
  );
}
