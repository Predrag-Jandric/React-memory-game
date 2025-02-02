import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <GameBoard />
    </div>
  );
};

export default App;
