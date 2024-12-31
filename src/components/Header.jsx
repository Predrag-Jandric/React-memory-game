import React from "react";

const Header = () => {
  const handleRestart = () => {
    alert("reset game");
    
  };

  return (
    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Memory Matching Game</h1>
      <button 
        onClick={handleRestart}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Restart Game
      </button>
    </div>
  );
};

export default Header;
