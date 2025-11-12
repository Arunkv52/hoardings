import React from "react";
import Logo_1 from "../assets/Client-logo/Logo-326-x162_01.png";
import Logo_2 from "../assets/Client-logo/Logo-326-x162_03.png";
import Logo_3 from "../assets/Client-logo/Logo-326-x162_04.png";
import Logo_4 from "../assets/Client-logo/Logo-326-x162_05.png";
import Logo_5 from "../assets/Client-logo/Logo-326-x162_06.png";
import Logo_6 from "../assets/Client-logo/Logo-326-x162_08.png";
import Logo_7 from "../assets/Client-logo/Logo-326-x162_21.png";
import Logo_8 from "../assets/Client-logo/Logo-326-x162_31.png";
import Logo_9 from "../assets/Client-logo/Logo-326-x162_37.png";
import Logo_10 from "../assets/Client-logo/Logo-326-x162_41.png";
import Logo_11 from "../assets/Client-logo/Logo-326-x162_42.png";
import Logo_12 from "../assets/Client-logo/Logo-326-x162_46.png";


const Clients = () => {
  return (
    <>
      <div className="md:px-20 px-5 md:py-20 py-15">
        <div className="md:flex justify-between items-center pb-10">
          <h6 className="md:text-5xl text-3xl md:font-normal font-semibold">Clients</h6>
          <p className="md:text-2xl text-[18px] md:pt-0 pt-3">
            Our clients are everything to us; so are we to them.
          </p>
        </div>
        <div className="logo-grid grid md:grid-cols-6 grid-cols-2 gap-2 md:py-3 py-0 gap-y-5">
          <div className='bg-[#f6f6f6]'>
            <img
              src={Logo_1}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_2}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_3}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_4}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_5}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_6}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            <img
              src={Logo_7}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_8}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_9}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_10}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_11}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
          <div className='bg-[#f6f6f6]'>
            {" "}
            <img
              src={Logo_12}
              alt=""
              className="grayscale md:w-full md:border-0 border-2 p-5 h-auto hover:grayscale-0 hover:cursor-pointer"
            />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Clients;
