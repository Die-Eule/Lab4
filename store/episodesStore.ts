import { getEpisodeFX } from "@/api/episode";
import { createStore } from "effector";

export const episodesStore = createStore([]);

episodesStore.on(getEpisodeFX.doneData, (state, episodes) => episodes);
