import React, { useEffect, useState } from "react";

const Size = (props) => {
  const [size, setSize] = useState({});
  const checkSize = props.pickSize;

  useEffect(() => {
    if (size != null) {
      checkSize(size);
    } else {
      console.log("null");
    }
  }, [size]);

  const changeSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="w-full h-[150px] grid grid-cols-5 justify-items-center mb-4 md:w-[600px] md:ml-12">
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={7.5}
      >
        7.5
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={8}
      >
        8
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={8.5}
      >
        8.5
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={9}
      >
        9
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={9.5}
      >
        9.5
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={10}
      >
        10
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={10.5}
      >
        10.5
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={11}
      >
        11
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={11.5}
      >
        11.5
      </button>
      <button
        className="w-[60px] h-[60px] mt-[20px] mx-4 font-semibold hover:border-black hover:border-2 focus:bg-black focus:text-white"
        onClick={changeSize}
        value={12}
      >
        12
      </button>
    </div>
  );
};

export default Size;
