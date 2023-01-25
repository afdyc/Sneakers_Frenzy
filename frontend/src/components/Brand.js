import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ShoeCard from "./ShoeCard";

const Brand = () => {
  const { brand } = useParams();
  const [shoeBrands, setShoeBrands] = useState([]);

  const filterBrands = shoeBrands.filter((shoeBrand) =>
    shoeBrand.name.toLowerCase().includes(brand)
  );

  useEffect(() => {
    getShoeBrand();
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

  return (
    <div>
      <h1>{brand}</h1>

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
  );
};

export default Brand;
