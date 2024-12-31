import React from "react";

const Card = ({ card, index, isFlipped, onClick }) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`w-20 h-20 flex items-center justify-center bg-white border-2 border-gray-300 rounded-lg cursor-pointer ${
        isFlipped ? "bg-blue-200" : "bg-gray-300"
      }`}
    >
      {isFlipped && <span className="text-2xl">{card}</span>}
    </div>
  );
};

export default Card;
