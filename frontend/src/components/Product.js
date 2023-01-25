import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";

const Product = () => {
  const [oneShoe, setOneShoe] = useState([]);
  const { name } = useParams();

  const filteredOneShoe = oneShoe.filter((shoe) => shoe.name.includes(name));

  useEffect(() => {
    getOneShoe();
  }, []);

  const getOneShoe = async () => {
    await axios
      .get(`http://localhost:5000/shoelist`)
      .then((response) => {
        // console.log(response.data);
        setOneShoe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <div>
        {filteredOneShoe.map((getProduct) => {
          /* console.log(getProduct); */

          return (
            <ProductCard
              key={getProduct._id}
              shoeName={getProduct.name}
              shoePrice={getProduct.price}
              shoePic={getProduct.picture}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Product;
