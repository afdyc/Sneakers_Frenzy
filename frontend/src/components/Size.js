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
    <div>
      <button className="mx-4" onClick={changeSize} value={7.5}>
        7.5
      </button>
      <button className="mx-4" onClick={changeSize} value={8}>
        8
      </button>
      <button className="mx-4" onClick={changeSize} value={8.5}>
        8.5
      </button>
      <button className="mx-4" onClick={changeSize} value={9}>
        9
      </button>
      <button className="mx-4" onClick={changeSize} value={9.5}>
        9.5
      </button>
      <button className="mx-4" onClick={changeSize} value={10}>
        10
      </button>
      <button className="mx-4" onClick={changeSize} value={10.5}>
        10.5
      </button>
      <button className="mx-4" onClick={changeSize} value={11}>
        11
      </button>
      <button className="mx-4" onClick={changeSize} value={11.5}>
        11.5
      </button>
      <button className="mx-4" onClick={changeSize} value={12}>
        12
      </button>
    </div>
  );
};

export default Size;
