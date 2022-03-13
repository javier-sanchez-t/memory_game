import Container from "../container";
import Card from "../card";
import gameCards from "../../data/game-data";
import { useState } from "react";

const Game = () => {
  const prepareGameData = (gameData) => {
    const data = [...gameData, ...gameData].sort(() => 0.5 - Math.random());

    return data;
  };

  const [cards, setCards] = useState(prepareGameData(gameCards));
  const [choices, setChoices] = useState([]);

  const onClickCardHandler = (cardIndex) => {
    const newCards = cards.map((card) => ({ ...card }));

    if (newCards[cardIndex].bloked || choices.length >= 2) {
      return;
    }

    newCards[cardIndex].display = true;
    newCards[cardIndex].bloked = true;
    setCards(newCards);

    choices.push({ index: cardIndex, id: newCards[cardIndex].id });
    setChoices(choices);

    if (choices.length === 2) {
      setTimeout(() => {
        if (choices[0].id !== choices[1].id) {
          console.log("diferentes");
          newCards[choices[0].index].display = false;
          newCards[choices[1].index].display = false;
          newCards[choices[0].index].bloked = false;
          newCards[choices[1].index].bloked = false;
        }

        setCards(newCards);
        setChoices([]);
      }, 600);
    }
  };

  return (
    <Container>
      {cards.map((card, index) => (
        <Card
          key={index}
          id={card.id}
          index={index}
          name={card.name}
          image={card.image}
          display={card.display}
          bloked={card.bloked}
          onClickHandler={onClickCardHandler}
        ></Card>
      ))}
    </Container>
  );
};

export default Game;
