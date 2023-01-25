import axios from "axios";
import React, { useEffect, useState } from "react";
import ShoeCard from "./ShoeCard";
import Nike from "../assets/Brand/nike.webp";
import Adidas from "../assets/Brand/adidas.PNG";
import Puma from "../assets/Brand/Puma-Black-Background.jpg";
import Cover from "../assets/Cover/Sneakers.png";
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
    <header>
      <section>
        <div>
          <div>
            {/* Hero image */}
            <img src={Cover} alt="shoe available" />
          </div>

          <div>
            <h1>Brands Available</h1>

            {/* Jordan image */}
            <button
              onClick={() => {
                navigate(`/${nk}`);
              }}
            >
              <img src={Nike} alt="shoe available" />
            </button>
            {/* NB image */}
            <button
              onClick={() => {
                navigate(`/${adds}`);
              }}
            >
              <img src={Adidas} alt="shoe available" />
            </button>
            {/* Puma image */}
            <button
              onClick={() => {
                navigate(`/${pumaS}`);
              }}
            >
              <img src={Puma} alt="shoe available" />
            </button>
          </div>

          <div>
            <h1>What's Hot</h1>
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
      </section>
    </header>
  );
};

export default Home;
