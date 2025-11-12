import React, { useState } from "react";
import Logo from "../assets/Logo-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Background from "./Background";
import MenuIcon from "../assets/Menu_icons.png";

const Navbar = () => {
  const [open, setOpen] = useState(false); // explicit initial value

  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <header className="h-dvh relative z-10">
        <div className="header-type md:flex md:justify-between items-center flex justify-around md:px-20 px-5 py-4 fixed md:w-full w-full">
          <div className="logo-bg md:flex md:justify-between items-center  w-full">
            <a href="#">
              <img src={Logo} alt="Logo" className="w-[50px]" />
            </a>
            {/* Desktop menu */}
            <ul className="hidden md:flex gap-8 text-[18px] font-light">
              <li className="relative cursor-pointer text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                About
              </li>
              <li className="relative cursor-pointer text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Products
              </li>
              <li className="relative cursor-pointer text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Services
              </li>
              <li className="relative cursor-pointer text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Contact us
              </li>
            </ul>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <img src={MenuIcon} alt="" />
          </button>
        </div>

        {/* Off-canvas mobile menu */}
        <div
          id="mobile-menu"
          className={`fixed top-0 right-0 h-full w-11/12 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out
      ${open ? "translate-x-0" : "translate-x-full"}`}
          role="menu"
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          <ul className="mt-16 px-5">
            <li className="py-3 text-2xl">
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>
            <li className="py-3 text-2xl">
              <a href="#products" onClick={() => setOpen(false)}>
                Products
              </a>
            </li>
            <li className="py-3 text-2xl">
              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>
            </li>
            <li className="py-3 text-2xl bg-blue-900 px-5 w-full text-center">
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <Background />
      </header>
    </>
  );
};

export default Navbar;
