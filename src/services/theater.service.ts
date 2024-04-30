import { Theater, TheaterData } from "@/interfaces/theater.interface";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

axios.defaults.baseURL = API_URL;

export const TheaterService = {
  async getAll() {
    const { data } = await axios.get<Theater[]>('/theater/all');
    return data;
  },

  async getById(id: number) {
    const { data } = await axios.get<Theater>(`/theater/${id}`);
    return data;
  }
}