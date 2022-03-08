import "./App.css";
import Container from "./components/container";
import gameCards from "./data/game-data";
import Card from "./components/card";

const prepareGameData = (gameData) => {
  const data = [...gameData, ...gameData];

  return data;
};

function App() {
  const gameData = prepareGameData(gameCards)

  return (
    <div className="App">
      <Container>
        {gameData.map((card) => (
          <Card id={card.id} name={card.name} image={card.image}></Card>
        ))}
      </Container>
    </div>
  );
}

export default App;
