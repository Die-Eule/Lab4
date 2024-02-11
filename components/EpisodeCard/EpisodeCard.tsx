import "./episodeCard.css"

const EpisodeCard = (item: any) => {
  return (
      <div key={item.id} className="char-card">
        <div className="char-card-data">
          <h3>{item.name}</h3>
          <p>Season: {Number(item.episode.substring(1,3))}</p>
          <p>Episode: {Number(item.episode.substring(4,6))}</p>
          <p>Air date: {item.air_date}</p>
        </div>
      </div>
  );
}

export default EpisodeCard;