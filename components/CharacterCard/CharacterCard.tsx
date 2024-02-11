import "./characterCard.css"

const CharacterCard = (item: any) => {
  return (
      <div key={item.id} className="char-card">
        <img src={item.image} alt="avatar" />
        <div className="char-card-data">
          <h3>{item.name}</h3>
          <p>Status: {item.status}</p>
          <p>Species: {item.species}</p>
          <p>Gender: {item.gender}</p>
        </div>
      </div>
  );
}

export default CharacterCard;