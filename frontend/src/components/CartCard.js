import React from "react";

const CartCard = (props) => {
  const shoeInfo = props.shoeDetail;
  const removeItem = props.delete;

  return (
    <ul>
      <li>
        <img width="300" src={shoeInfo.image} alt="shoes" />
      </li>
      <li>{shoeInfo.shoeName}</li>
      <li>{shoeInfo.price}</li>
      <li>{shoeInfo.size}</li>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          removeItem(shoeInfo._id);
        }}
      >
        <button type="submit">delete</button>
      </form>
    </ul>
  );
};

export default CartCard;
