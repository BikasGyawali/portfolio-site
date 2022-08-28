import React, { useEffect } from "react";
import "../../src/App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex justify-evenly items-center bg-gray-50 h-44 md:h-96">
        <div data-aos="fade-left">
          <p className=" text-indigo-900 font-iceberg  text-2xl md:text-7xl tracking-wide hover:text-orange-500">
            MySQL
          </p>
        </div>
        <div data-aos="fade-left">
          {" "}
          <p className="text-orange-500 font-iceberg  text-2xl md:text-7xl tracking-wide  hover:text-indigo-900">
            REACT
          </p>
        </div>

        <div data-aos="fade-right">
          <p className=" text-indigo-900 font-iceberg  text-2xl md:text-7xl tracking-wide hover:text-orange-500 ">
            NODE
          </p>
        </div>
        <div data-aos="fade-right">
          <p className="text-orange-500 font-iceberg  text-2xl md:text-7xl tracking-wide hover:text-indigo-900">
            EXPRESS
          </p>
        </div>
      </div>

      <div className="flex flex-col px-12 md:h-96 py-12 justify-center items-center  bg-indigo-900">
        <h3 className="uppercase tracking-widest text-white text-2xl font-iceberg">
          About
        </h3>
        <p className="pt-2  text-l md:text-2xl text-justify text-normal tracking-wide text-white font-normal">
          I am a Web developer based on Kathmandu, Nepal. I have just completed
          my bachelor's degree in Computer Engineering and finished my
          internship as Full-stack web dev and hoping for a great professional
          career. Currently, I am searching for opportunities so that i can
          enchance my skills and learn from seniors about the industry standard.
        </p>
      </div>
    </>
  );
};

export default About;
