import "./locationCard.css"

const LocationCard = (item: any) => {
  return (
      <div key={item.id} className="char-card">
        <div className="char-card-data">
          <h3>{item.name}</h3>
          <p>Type: {item.type}</p>
          <p>dimension: {item.dimension}</p>
        </div>
      </div>
  );
}

export default LocationCard;