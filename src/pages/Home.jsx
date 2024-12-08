import React from "react";
import heroimg from "../assets/heroimg.png";
import eventinfoimg from "../assets/eventinforectangle.png"
import { Calendar, MapPin, Mic } from "lucide-react";
const Home = () => {
  return (
    <>
      <div className="relative ">
        <div
          className={`absolute inset-0 bg-cover bg-center h-full`}
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <div className="absolute inset-0 " />
        </div>
        <div className=" relative mx-auto px-2 py-28">
          <div className="max-w-xl text-white">
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 relative border border-white/20 shadow-xl">
              <div className="relative z-10">
                <p className="text-lg text-white/80 mb-4">
                  3rd International Conference on Forensic Science
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Forensis Agora
                </h1>
                <span className="text-2xl text-white/90 border-blue-400 border-b-4 inline-block mb-8">
                  08-09 February, 2025
                </span>
                <br />
                <button className="bg-[#40bfff] hover:bg-[#40bfff]/80 text-white px-8 py-2 rounded-full font-medium transition-colors">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
      {/* <div className="block bg-contain bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${eventinfoimg})` }}> */}
          {/* <svg
            className="absolute bottom-0 h-8 w-full transform-gpu"
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            absolute inset-x-0 top-[-50%] max-w-xl left-1/2 translate-x-[-50%]  bg-gradient-to-r from-[#3CD2FF] to-[#342499]  
          >
            <path
              d="M0 48h1440V0c-211.06 42.838-427.484 41.932-644.558-2.718C578.368.549 362.556 2.778 0 48Z"
              fill="currentColor"
              className="text-white"
            />
          </svg> */}
            {/* <img src={eventinfoimg} alt="event image background" className="w-full" loading="lazy" /> */}
        {/* </div> */}
        <div className="bg-gradient-to-r from-[#3CD2FF] to-[#342499] block w-full md:max-w-2xl p-8 md:absolute md:left-1/2 -top-9 md:rounded-3xl md:translate-x-[-50%] z-40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-around">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-white" />
            <div>
              <div className="text-[#00095C] text-sm font-bold">DATE</div>
              <div className="text-white font-bold">February 8-9, 2025</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-white" />
            <div>
              <div className="text-[#00095C] text-sm font-bold">Location</div>
              <div className="text-white font-bold">Galgotias University</div>
            </div>
          </div>

          {/* <div className="flex items-center gap-2">
            <Mic className="h-6 w-6 text-white" />
            <div>
              <div className="text-[#5b6bff] text-sm font-semibold">Speakers</div>
              <div className="text-white font-bold">25+ Speakers</div>
            </div>
          </div> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
