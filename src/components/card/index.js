import { useState } from "react";
import "./styles.css";

const Card = ({ name, image }) => {
  const [display, setDisplay] = useState(false);

  const onclickHandler = () => {
    setDisplay(true);
  };

  return (
    <div onClick={onclickHandler} className="card">
      {!display && (
        <img className="pokeball" src="./images/pokeball.png" alt="Pokeball" />
      )}

      {display && (
        <div>
          <img className="pokemon" src={image} alt={name} />

          <div className="name">{name}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
