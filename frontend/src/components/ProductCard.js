import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Size from "./Size";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const notifySuccess = () => {
    toast.success("Shoe has been added to cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(finalSize);

    if (userLoggedin) {
      if (passLoggedin) {
        insertItem();
        notifySuccess();
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-[25px] px-10 md:grid grid-cols-2 justify-items-center">
      <img
        className="mb-4 md:mb-0 md:ml-72"
        width="450px"
        src={shoePicture}
        alt="shoes"
      />

      <div className="w-full h-full flex flex-col md:justify-center">
        <h1 className="font-bold text-2xl md:ml-12">{shoeTitle}</h1>
        <p className="font-semibold text-2xl mt-2 mb-6 md:ml-12">${shoeCost}</p>

        <p className="font-semibold text-lg my-2 underline md:ml-12">Size</p>
        <Size pickSize={getSize} />

        <form
          className="flex justify-center my-6 md:ml-12 md:justify-start"
          onSubmit={handleSubmit}
        >
          <button
            className="w-36 h-14 text-[16px] leading-6 font-bold text-[#111111] border-2 border-black hover:text-white hover:bg-[#111111] rounded-lg duration-300"
            type="submit"
          >
            Add To Cart
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
