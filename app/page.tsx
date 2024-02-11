'use client'
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { charactersStore } from "@/store/charactersStore";
import { getCharacterFX } from "@/api/character";
import CharacterCard from "@/components/CharacterCard/CharacterCard";


export default function Home() {
  const characters = useUnit({
    characters: charactersStore,
    getCharacterFX: getCharacterFX,
  });

  useEffect(() => {
    characters.getCharacterFX(1);
  }, [characters.getCharacterFX]);

  return (
    <div className="app">
      {characters.characters.map((item, index) => (
        <CharacterCard {...item} />
      ))}
    </div>
  );
}
