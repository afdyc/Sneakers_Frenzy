import React from "react";

const ShoeCard = (props) => {
  const shoeTitle = props.shoeName;
  const shoeCost = props.shoePrice;
  const shoePicture = props.shoePic;
  // const base64String = props.shoe64;

  return (
    <ul className="mb-5">
      <li>
        <a href={"/specific/" + shoeTitle}>
          <img
            width="300"
            // src={`data:image/webp;base64,${base64String}`}
            // src={`${shoePicture}`}
            src={shoePicture}
            alt="shoes"
          />
        </a>
      </li>

      <li>
        <a href={"/specific/" + shoeTitle} className="font-semibold">
          {shoeTitle}
        </a>
      </li>
      <li>Men's Shoes</li>
      <li className="text-gray-500">1 Colour</li>
      <li>${shoeCost}</li>
    </ul>
  );
};

export default ShoeCard;
