import React, { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = () => {
  const initialCards = ["🍎", "🍌", "🍓", "🍇", "🍎", "🍌", "🍓", "🍇"];
  const [shuffledCards, setShuffledCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); 
  const [matchedCards, setMatchedCards] = useState([]); 

  
  useEffect(() => {
    resetGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const handleCardClick = (index) => {
    if (matchedCards.includes(index) || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (shuffledCards[firstIndex] === shuffledCards[secondIndex]) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const resetGame = () => {
    setShuffledCards(shuffleArray(initialCards));
    setFlippedCards([]);
    setMatchedCards([]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-4 mb-4">
        {shuffledCards.map((card, index) => (
          <Card
            key={index}
            card={card}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            isMatched={matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameBoard;
