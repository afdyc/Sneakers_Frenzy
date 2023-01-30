import React from "react";

const CartCard = (props) => {
  const shoeInfo = props.shoeDetail;
  const removeItem = props.delete;

  return (
    <ul className="w-[450px] h-[200px] mb-8 flex md:justify-start md:ml-[200px]">
      <li className="mr-[30px]">
        <img width="200" src={shoeInfo.image} alt="shoes" />
      </li>

      <div>
        <li className="font-semibold mb-2">{shoeInfo.shoeName}</li>
        <li className="mb-2">${shoeInfo.price}</li>
        <li className="mb-2">Size : {shoeInfo.size}</li>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            removeItem(shoeInfo._id);
          }}
          className="mb-2"
        >
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="w-20 h-7 text-[16px] leading-6 font-bold text-[#111111] border-2 border-black hover:text-white hover:bg-[#111111] rounded-md duration-300"
            type="submit"
          >
            Remove
          </button>
        </form>
      </div>
    </ul>
  );
};

export default CartCard;
