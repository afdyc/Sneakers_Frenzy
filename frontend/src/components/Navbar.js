import React, { useState } from "react";
import Logo from "../assets/Cover/SFLogo-removebg-preview.png";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const userLoggedin = localStorage.getItem("username");
  const passLoggedin = localStorage.getItem("password");
  const nk = "nike";
  const adds = "adidas";
  const pumaS = "puma";

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  const hamburgerActivated = () => {
    setActive(!active);
  };

  return (
    <nav className="fixed w-full h-[80px] flex items-center justify-between z-30 px-[40px] bg-white">
      <a href="/">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.7 }}
          className="w-[100px]"
          src={Logo}
          alt="Sneakers Frenzy Logo"
        />
      </a>

      {/* desktop*/}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden md:flex text-center ml-[120px]"
      >
        <a
          href="/"
          className="w-28 h-14 text-[16px] leading-6 mt-[2px] pt-[15px] text-[#111111] hover:border-b-2 border-black"
        >
          Home
        </a>
        <a
          href={"/" + nk}
          className="w-28 h-14 text-[16px] leading-6 mt-[2px] pt-[15px] text-[#111111] hover:border-b-2 border-black"
        >
          Nike
        </a>
        <a
          href={"/" + adds}
          className="w-28 h-14 text-[16px] leading-6 mt-[2px] pt-[15px] text-[#111111] hover:border-b-2 border-black"
        >
          Adidas
        </a>
        <a
          href={"/" + pumaS}
          className="w-28 h-14 text-[16px] leading-6 mt-[2px] pt-[15px] text-[#111111] hover:border-b-2 border-black"
        >
          Puma
        </a>
        {userLoggedin && passLoggedin ? (
          <a
            href="/login/cart"
            className="w-28 h-14 text-[16px] leading-6 mt-[2px] pt-[15px] text-[#111111] hover:border-b-2 border-black"
          >
            Cart
          </a>
        ) : (
          ""
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden md:flex text-center"
      >
        {userLoggedin && passLoggedin ? (
          <>
            <button
              onClick={handleClick}
              className="w-28 h-14 text-sm leading-6 font-bold text-[#111111] hover:text-white hover:bg-[#111111] rounded-lg"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <a
              className="w-28 h-14 text-sm leading-6 mt-[2px] pt-[15px] font-bold text-[#111111] hover:text-white hover:bg-[#111111] rounded-lg"
              href="/login"
            >
              Login
            </a>
            <a
              className="w-28 h-14 text-sm leading-6 mt-[2px] pt-[15px] font-bold text-[#111111] hover:text-white hover:bg-[#111111] rounded-lg"
              type="submit"
              href="/register"
            >
              Register
            </a>
          </>
        )}
      </motion.div>

      {/* hamburger menu */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.7 }}
        className="z-30 absoulte md:hidden"
        onClick={hamburgerActivated}
      >
        <Hamburger toggled={active} toggle={active} duration={0.8} />
      </motion.div>

      {/* mobile */}
      <div
        className={
          !active
            ? "hidden"
            : "fixed z-20 flex flex-col top-0 right-0 w-full duration-300 h-screen justify-between items-center text-center bg-white py-72"
        }
      >
        <div className="w-28 h-[250px] flex flex-col">
          <a
            href="/"
            className="w-28 h-14 text-[16px] leading-6 pt-[18px] text-[#111111] hover:font-bold"
          >
            Home
          </a>
          <a
            href={"/" + nk}
            className="w-28 h-14 text-[16px] leading-6 pt-[18px] text-[#111111] hover:font-bold"
          >
            Nike
          </a>
          <a
            href={"/" + adds}
            className="w-28 h-14 text-[16px] leading-6 pt-[18px] text-[#111111] hover:font-bold"
          >
            Adidas
          </a>
          <a
            href={"/" + pumaS}
            className="w-28 h-14 text-[16px] leading-6 pt-[18px] text-[#111111] hover:font-bold"
          >
            Puma
          </a>
          {userLoggedin && passLoggedin ? (
            <a
              href="/login/cart"
              className="w-28 h-14 text-[16px] leading-6 pt-[18px] text-[#111111] hover:font-bold"
            >
              Cart
            </a>
          ) : (
            ""
          )}
        </div>

        <div className="w-28 h-[125px] flex flex-col">
          {userLoggedin && passLoggedin ? (
            <>
              <button
                onClick={handleClick}
                className="w-28 h-14 text-[16px] leading-6 font-bold text-[#111111] hover:text-white hover:bg-[#111111] rounded-lg"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <a
                className="w-28 h-14 text-[16px] leading-6 pt-[18px] font-bold text-[#111111] hover:text-white hover:bg-[#111111] rounded-lg"
                href="/login"
              >
                Login
              </a>
              <a
                className="w-28 h-14 text-[16px] leading-6 pt-[18px] font-bold text-[#111111] hover:text-white hover:bg-[#111111] rounded-lg"
                href="/register"
              >
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
