import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import About from "./About";

// ..
AOS.init();

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="bg-indigo-900 md:h-screen">
        <div className="flex"></div>
        <div className="mt-12 flex flex-col justify-center items-center ">
          <div data-aos="fade-left" className="flex">
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              W
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              E
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              B
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              -
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              D
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              E
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              V
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              E
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              L
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              O
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              P
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              E
            </span>
            <span className="font-bold mt-24 md:mt-28 text-white font-iceberg text-4xl md:text-7xl lg:text-9xl pb-3 md:py-6 tracking-widest hover:text-orange-300">
              R
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white font-iceberg text-l text-sm md:text-md lg:text-lg">
              A full-stack web developer based on
              <span className="px-1 text-orange-300">Kathmandu, Nepal</span>
            </p>
            <p className="text-white  text-sm md:text-md mt-1">
              Let's create something together
            </p>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
