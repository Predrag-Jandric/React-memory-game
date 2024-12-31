import React, { useState, useEffect } from "react";
// import Card from "./Card";

const GameBoard = () => {
  const initialCards = ["🍎", "🍌", "🍓", "🍇", "🍎", "🍌", "🍓", "🍇"];
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    setShuffledCards(shuffleArray(initialCards));
  }, []);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const handleCardClick = (index) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, index]);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {shuffledCards.map((card, index) => (
        <p>card</p>
        
        // <Card 
        //   key={index} 
        //   card={card} 
        //   index={index} 
        //   isFlipped={selectedCards.includes(index)} 
        //   onClick={handleCardClick} 
        // />
      ))}
    </div>
  );
};

export default GameBoard;
