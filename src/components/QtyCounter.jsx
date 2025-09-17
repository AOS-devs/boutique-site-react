import React, { useState } from "react";

const QtyCounter = ({width, height}) => {
    const [count, setCount] = useState(1)/* 
    const [isHeight, setIsHeight] = useState(false)
    const [isWidth, setIsWidth] = useState(false)
    
    if (height) {
      setIsHeight(true)
    }
    if (width) {
      setIsWidth(true)
    } */

      const handleIncreaseQty = () => {
        setCount(prev => prev+1)
      }
    
      const handleDecreaseQty = () => {
        setCount(prev => Math.max(prev-1, 1))
      }
  return (
    <div className={`${height ? `h-${height}` : "h-full"} ${width ? `w-${width}` : "w-[25%]"} mr-[10px] flex items-center border`}>
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
