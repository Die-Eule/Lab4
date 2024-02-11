import { getCharacterFX } from "@/api/character";
import { createStore } from "effector";

export const charactersStore = createStore([]);

charactersStore.on(getCharacterFX.doneData, (state, characters) => characters);
