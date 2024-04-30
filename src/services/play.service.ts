import { Play } from "@/interfaces/play.interface"
import axios from "axios"

const API_URL = "http://localhost:8080/api/v1";

axios.defaults.baseURL = API_URL;

export const PlayService = {
  async getByTheaterId(id: number) {
    const { data } = await axios.get<Play[]>(`/play/all/theater/${id}`);
    return data;
  },

  async getById(id: number) {
    const { data } = await axios.get<Play>(`/play/${id}`);
    return data;
  },

  async getAll() {
    const { data } = await axios.get<Play[]>('/play/all');
    return data;
  },

  async getPlaysPerDate(date: string) {
    const { data } = await axios.get<Play[]>(`/play/all/date/${date}`);
    return data;
  }
}