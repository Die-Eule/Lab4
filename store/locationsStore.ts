import { getLocationFX } from "@/api/location";
import { createStore } from "effector";

export const locationsStore = createStore([]);

locationsStore.on(getLocationFX.doneData, (state, locations) => locations);
