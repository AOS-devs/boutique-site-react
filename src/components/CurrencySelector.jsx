import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleSelectorOpen = () => {
    setIsSelectorOpen((prev) => !prev);
  }

  return (
    <div className="w-28 h-8 flex items-center border bg-white relative">
      <select
        id="currency"
        value={selectedCurrency}
        onClick={handleSelectorOpen}
        onChange={handleCurrencyChange}
        className="appearance-none text-center flex-1 font-bold bg-transparent outline-none cursor-pointer"
      >
        <option value="USD">USD</option>
        <option value="NGN">NGN</option>
        <option value="GBP">GBP</option>
      </select>
      {isSelectorOpen ? (
        <RiArrowDropUpLine className="absolute right-1 w-6 h-6 pointer-events-none" />
      ) : (
        <RiArrowDropDownLine className="absolute right-1 w-6 h-6 pointer-events-none" />
      )}
    </div>
  );
};

export default CurrencySelector;
