'use client'
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { episodesStore } from "@/store/episodesStore";
import { getEpisodeFX } from "@/api/episode";
import EpisodeCard from "@/components/EpisodeCard/EpisodeCard";


export default function Home() {
  const episodes = useUnit({
    episodes: episodesStore,
    getEpisodeFX: getEpisodeFX,
  });

  useEffect(() => {
    episodes.getEpisodeFX();
  }, [episodes.getEpisodeFX]);

  return (
    <div className="app">
      {episodes.episodes.map((item, index) => (
        <EpisodeCard {...item} />
      ))}
    </div>
  );
}
