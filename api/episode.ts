import api from "./axiosClient";
import { createEffect } from "effector";

export const getEpisodeFX = createEffect(async () => {
    try {
        const response = await api.get("episode");
        return response.data.results;
    } catch(error) {
        throw error;
    }
});
