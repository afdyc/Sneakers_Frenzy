import axios from "axios";
import React, { useEffect, useState } from "react";
import ShoeCard from "./ShoeCard";
import Nike from "../assets/Brand/nikejpgcropped.jpg";
import Adidas from "../assets/Brand/adidasjpgcropped.jpg";
import Puma from "../assets/Brand/pumajpgcropped.jpg";
import Cover from "../assets/Cover/Sneakers5.png";
import { useNavigate } from "react-router";

const Home = () => {
  const [shoes, setShoes] = useState([]);
  const navigate = useNavigate();
  const nk = "nike";
  const adds = "adidas";
  const pumaS = "puma";

  useEffect(() => {
    getShoe();
  }, []);

  const getShoe = async () => {
    await axios
      .get(`http://localhost:5000/shoelist`)
      .then((response) => {
        // console.log(response.data);
        setShoes(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <header className="w-full h-screen px-[40px] pt-[80px]">
      <section>
        <div>
          <div className="w-full md:flex items-center justify-center ">
            {/* Hero image */}
            <img src={Cover} alt="shoe available" />
          </div>

          <div className="w-full">
            <h1 className="font-semibold text-lg mt-7 mb-3 md:ml-16 md:mt-[200px] md:mb-[25px]">
              Brands Available
            </h1>

            <div className="flex justify-center items-center mb-2">
              {/* Jordan image */}
              <button
                onClick={() => {
                  navigate(`/${nk}`);
                }}
              >
                <img
                  className="w-[125px] mx-1 md:w-[500px] md:mx-2"
                  src={Nike}
                  alt="shoe available"
                />
              </button>
              {/* NB image */}
              <button
                onClick={() => {
                  navigate(`/${adds}`);
                }}
              >
                <img
                  className="w-[125px] mx-1 md:w-[500px] md:mx-2"
                  src={Adidas}
                  alt="shoe available"
                />
              </button>
              {/* Puma image */}
              <button
                onClick={() => {
                  navigate(`/${pumaS}`);
                }}
              >
                <img
                  className="w-[125px] mx-1 md:w-[500px] md:mx-2"
                  src={Puma}
                  alt="shoe available"
                />
              </button>
            </div>
          </div>

          <div className="w-full h-full">
            <h1 className="font-semibold text-lg mt-7 mb-3 md:ml-16 md:mt-[200px] md:mb-[25px]">
              All Products
            </h1>
            <div className="w-full h-full grid grid-cols-2 gap-3 md:grid-cols-4 md:px-[200px]">
              {shoes.map((shoe) => {
                /* const base64String = btoa(
                String.fromCharCode(...new Uint8Array(shoe.picture.data.data))
              ); */

                return (
                  <ShoeCard
                    key={shoe._id}
                    shoeName={shoe.name}
                    shoePrice={shoe.price}
                    shoePic={shoe.picture}
                    // shoe64={base64String}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Home;
