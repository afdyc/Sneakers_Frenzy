import React from "react";
import Logo from "../assets/Cover/SFLogo-removebg-preview.png";

const Navbar = () => {
  const userLoggedin = localStorage.getItem("username");
  const passLoggedin = localStorage.getItem("password");
  const nk = "nike";
  const adds = "adidas";
  const pumaS = "puma";

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav>
      <section className="w-full h-[80px] flex justify-between items-center px-[40px]">
        <img className="w-[100px]" src={Logo} alt="Sneakers Frenzy Logo" />

        <div className="flex justify-center items-center">
          <a href="/" className="mx-3">
            Home
          </a>
          <a href={"/" + nk} className="mx-3">
            Nike
          </a>
          <a href={"/" + adds} className="mx-3">
            Adidas
          </a>
          <a href={"/" + pumaS} className="mx-3">
            Puma
          </a>
          {userLoggedin && passLoggedin ? (
            <a href="/login/cart" className="mx-3">
              Cart
            </a>
          ) : (
            ""
          )}
        </div>

        <div>
          {userLoggedin && passLoggedin ? (
            <>
              <button onClick={handleClick}>Log Out</button>
            </>
          ) : (
            <>
              <a className="mx-3" href="/login">
                Login
              </a>
              <a className="mx-3" href="/register">
                Register
              </a>
            </>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
