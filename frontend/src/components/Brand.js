import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ShoeCard from "./ShoeCard";

const Brand = () => {
  const { brand } = useParams();
  const [shoeBrands, setShoeBrands] = useState([]);
  const [brandName, setBrandName] = useState("");

  const filterBrands = shoeBrands.filter((shoeBrand) =>
    shoeBrand.name.toLowerCase().includes(brand)
  );

  useEffect(() => {
    getShoeBrand();
    rebrand();
  }, []);

  const getShoeBrand = async () => {
    await axios
      .get(`http://localhost:5000/shoelist`)
      .then((response) => {
        // console.log(response.data);
        setShoeBrands(response.data);
      })
      .catch((error) => console.log(error));
  };

  const rebrand = () => {
    if (brand === "nike") {
      console.log(brand);
      setBrandName("Nike");
    } else if (brand === "adidas") {
      setBrandName("Adidas");
    } else if (brand === "puma") {
      setBrandName("Puma");
    }
  };

  return (
    <section className="w-full h-screen px-[40px] pt-[80px]">
      <div className="my-8 md:pl-[200px]">
        <a href="/">Home &#62; </a>
        <span>{brandName}</span>
      </div>

      <div className="w-full h-full grid grid-cols-2 gap-5 md:grid-cols-4 md:px-[200px]">
        {filterBrands.map((filterBrand) => {
          return (
            <ShoeCard
              key={filterBrand._id}
              shoeName={filterBrand.name}
              shoePrice={filterBrand.price}
              shoePic={filterBrand.picture}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Brand;
