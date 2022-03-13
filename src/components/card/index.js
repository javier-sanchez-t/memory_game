import "./styles.css";

const Card = ({ index, name, image, display, onClickHandler }) => {
  return (
    <div className="card" onClick={() => onClickHandler(index)}>
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
