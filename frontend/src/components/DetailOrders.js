import React from "react";

const DetailOrders = (props) => {
  const shoeInfo = props.shoeDetail;

  return (
    <section>
      <div className="grid grid-cols-2">
        <h1>{shoeInfo.shoeName}</h1>
        <p className="text-right">${shoeInfo.price}</p>
      </div>
    </section>
  );
};

export default DetailOrders;
