import React, { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "./CartCard";
import DetailOrders from "./DetailOrders";
import { useNavigate } from "react-router";

const Cart = () => {
  const userLoggedin = localStorage.getItem("username");
  const passLoggedin = localStorage.getItem("password");
  let total = 0;
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedin) {
      if (passLoggedin) {
        usersCart();
      } else {
        console.log(
          "there is no user logged in, how can you got here without any login credentials ??"
        );
      }
    }
  }, []);

  const usersCart = async () => {
    await axios
      .get(`http://localhost:5000/cart`)
      .then((response) => {
        // console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteItem = async (itemid) => {
    // console.log(itemid);
    setItems((prevItems) => {
      return prevItems.filter((filteredItem) => {
        return filteredItem._id !== itemid;
      });
    });

    await axios
      .delete(`http://localhost:5000/cart/${itemid}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredItems = items.filter((item) => item.user === userLoggedin);

  return (
    <header className="w-full h-full px-[40px] pt-[80px]">
      <div className="mt-8 mb-14 md:pl-[200px]">
        <a href="/">Home &#62; </a>
        <span>Cart</span>
      </div>

      <div className="md:grid grid-cols-2">
        <div className="w-full h-full mb-14">
          {filteredItems.map((shoe) => {
            return (
              <CartCard key={shoe._id} shoeDetail={shoe} delete={DeleteItem} />
            );
          })}
        </div>

        <div className="w-full bg-[#111111] text-white rounded-lg p-6">
          <h1 className="font-bold text-xl mb-4 underline">Detail Orders</h1>
          {filteredItems.map((shoe) => {
            if (shoe.price) {
              total += shoe.price;
            }

            return <DetailOrders key={shoe._id} shoeDetail={shoe} />;
          })}

          <div className="grid grid-cols-2 mt-5">
            <p>Total : </p>
            <p className="text-right">${total}</p>
          </div>

          <button
            onClick={() => {
              navigate("/login/cart/thankyou");
            }}
            className="w-[200px] h-11 text-xl font-bold text-white border-2 border-white hover:text-[#111111] hover:bg-white rounded-md duration-300 mt-5"
          >
            Check Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Cart;
