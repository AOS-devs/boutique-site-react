import React, { useState } from "react";

const QtyCounter = ({width, height}) => {
    const [count, setCount] = useState(1)

      const handleIncreaseQty = () => {
        setCount(prev => prev+1)
      }
    
      const handleDecreaseQty = () => {
        setCount(prev => Math.max(prev-1, 1))
      }
  return (
    <div className={`h-${height} w-${width}  mr-[10px] flex items-center border`}>
      <button
        onClick={handleDecreaseQty}
        className="w-[33%] h-full text-center xy-center cursor-pointer"
      >
        -
      </button>
      <div className="w-[34%] h-full text-center xy-center font-bold">
        {count}
      </div>
      <button
        onClick={handleIncreaseQty}
        className="w-[33%] h-full text-center xy-center cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default QtyCounter;
