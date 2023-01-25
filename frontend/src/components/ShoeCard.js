import React from "react";

const ShoeCard = (props) => {
  const shoeTitle = props.shoeName;
  const shoeCost = props.shoePrice;
  const shoePicture = props.shoePic;
  // const base64String = props.shoe64;

  return (
    <ul>
      <a href={"/specific/" + shoeTitle}>
        <img
          width="300"
          // src={`data:image/webp;base64,${base64String}`}
          // src={`${shoePicture}`}
          src={shoePicture}
          alt="shoes"
        />
      </a>
      <a href={"/specific/" + shoeTitle}>{shoeTitle}</a>
      <li>{shoeCost}</li>
    </ul>
  );
};

export default ShoeCard;
