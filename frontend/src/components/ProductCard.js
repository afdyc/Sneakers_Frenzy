import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Size from "./Size";

const ProductCard = (props) => {
  const userLoggedin = localStorage.getItem("username");
  const passLoggedin = localStorage.getItem("password");
  const [finalSize, setFinalSize] = useState("");
  const shoeTitle = props.shoeName;
  const shoeCost = props.shoePrice;
  const shoePicture = props.shoePic;
  const navigate = useNavigate();

  const getSize = (number) => {
    setFinalSize(number);
  };

  //LAST UPDATE
  const insertItem = async () => {
    try {
      await axios
        .post(`http://localhost:5000/insertItem`, {
          shoeTitle,
          shoeCost,
          shoePicture,
          finalSize,
          userLoggedin,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(finalSize);

    if (userLoggedin) {
      if (passLoggedin) {
        insertItem();
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <a href={"/specific/" + shoeTitle}>
        <img src={shoePicture} alt="shoes" />
      </a>
      <a href={"/specific/" + shoeTitle}>{shoeTitle}</a>
      <p>{shoeCost}</p>
      <Size pickSize={getSize} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Add To Cart</button>
      </form>
    </>
  );
};

export default ProductCard;
