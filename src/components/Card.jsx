import React from "react";

const Card = ({ card, isFlipped, isMatched, onClick }) => {
  return (
    <div
      onClick={!isFlipped ? onClick : undefined} 
      className={`w-20 h-20 flex items-center justify-center border-2 rounded-lg cursor-pointer 
        ${isMatched ? "bg-green-200" : isFlipped ? "bg-blue-200" : "bg-gray-300"}
      `}
    >
      {isFlipped && <span className="text-2xl">{card}</span>}
    </div>
  );
};

export default Card;
