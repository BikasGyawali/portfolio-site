import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row font-iceberg bg-indigo-900 px-4 md:px-20 items-center justify-between">
        <div className="flex justify-start pt-2">
          <p className="pt-14 font-iceberg origin-center -rotate-90 text-l text-orange-300 uppercase tracking-wide md:text-xl">
            Bikash
          </p>
          <p className=" pl-1 text-l font-iceberg  text-white uppercase tracking-wide md:text-xl md:pl-0">
            Gyawali
          </p>
        </div>
        <button className="text-l md:text-xl uppercase font-iceberg py-3  text-orange-300  hover:underline">
          <NavLink to="/"> Home</NavLink>
        </button>
        <button className="text-l md:text-xl uppercase font-iceberg  py-3 text-orange-300  hover:underline">
          <NavLink to="/works"> Works</NavLink>
        </button>
        <button className="text-l md:text-xl uppercase font-iceberg  py-3  text-orange-300  hover:underline">
          <NavLink to="/contact"> Contact</NavLink>
        </button>
      </div>
    </>
  );
};

export default Navbar;
