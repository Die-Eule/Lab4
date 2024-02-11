import api from "./axiosClient";
import { createEffect } from "effector";

export const getCharacterFX = createEffect(async (page: number) => {
    try {
        const response = await api.get("character?page=" + page);
        return response.data.results;
    } catch(error) {
        throw error;
    }
});
