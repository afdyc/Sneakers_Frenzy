import React, { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "./CartCard";

const Cart = () => {
  const userLoggedin = localStorage.getItem("username");
  const passLoggedin = localStorage.getItem("password");
  const [items, setItems] = useState([]);

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
    console.log(itemid);

    setItems((prevItems) => {
      return prevItems.filter((filteredItem) => {
        return filteredItem._id != itemid;
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
  // console.log(filteredItems);

  return (
    <header>
      <div>
        <h1>Cart</h1>

        {filteredItems.map((shoe) => {
          return (
            <CartCard key={shoe._id} shoeDetail={shoe} delete={DeleteItem} />
          );
        })}
      </div>
    </header>
  );
};

export default Cart;
