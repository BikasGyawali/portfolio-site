import React,{useEffect} from "react";
import one from "../images/ecommerce.png";
import two from "../images/user fetcher.png";
import three from "../images/Restaurant.png";


const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <h1 className="py-10 flex mx-auto justify-center text-indigo-900 bg-gray-50 font-iceberg text-4xl md:text-7xl tracking-wide hover:text-orange-500">
        WORKS
      </h1>
      <div className=" flex flex-col w-full  gap-y-6   justify-center items-center">
        <div data-aos="fade-up" className="flex flex-col py-8">
          <a href="https://github.com/BikasGyawali/MERN_Ecommerce" className="flex flex-col py-8">
            <img src={one} className="h-60 md:h-96 pb-2" alt="/ecommerce" />
            <p className="text-orange-500 font-iceberg mx-auto text-xl md:text-5xl tracking-wide hover:text-indigo-900">
              Ecommerce Website(Not Deployed)
            </p>
          </a>
        </div>
        <div data-aos="fade-up">
          <a
            href="https://bikasgyawali.github.io/fetching-github-user-info"
            className="flex flex-col py-8"
          >
            <img src={two} className="h-60 md:h-96 pb-2" alt="/Userfetcher" />
            <p className=" text-indigo-900 font-iceberg mx-auto text-xl  md:text-5xl tracking-wide hover:text-orange-500 ">
              Github User Fetcher
            </p>
          </a>
        </div>
        <div data-aos="fade-up" className="flex flex-col py-10">
          <a
            href="https://bikasgyawali.github.io/restaurant-website-react"
            className="flex flex-col py-8"
          >
            <img src={three} className="h-60 md:h-96" alt="/expense tracker" />
            <p className="text-orange-500 font-iceberg mx-auto text-xl  md:text-5xl tracking-wide hover:text-indigo-900">
              Simple Restaurant UI
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;
