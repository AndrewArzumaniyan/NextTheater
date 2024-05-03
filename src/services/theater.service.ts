import { Theater, TheaterData } from "@/interfaces/theater.interface";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

axios.defaults.baseURL = API_URL;

export const TheaterService = {
  async getAll() {
    try {
      const { data } = await axios.get<Theater[]>('/theater/all');
      return data;
    } catch (e) {
      console.error('Error fetching data TheaterService.getAll:', e);
      return [] as Theater[];
    }
  },

  async getById(id: number) {
    try {
      const { data } = await axios.get<Theater>(`/theater/${id}`);
      return data;
    } catch (e) {
      console.error('Error fetching data TheaterService.getById:', e);
      return {} as Theater;
    }
  }
}