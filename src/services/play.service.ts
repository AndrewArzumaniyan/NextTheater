import { Play } from "@/interfaces/play.interface"
import axios from "axios"

const API_URL = "http://localhost:8080/api/v1";

axios.defaults.baseURL = API_URL;

export const PlayService = {
  async getByTheaterId(id: number) {
    try {
      const { data } = await axios.get<Play[]>(`/play/all/theater/${id}`);
      return data;
    } catch (e) {
      console.error('Error fetching data PlayService.getByTheaterId:', e);
      return [] as Play[];
    }
  },

  async getById(id: number) {
    try {
      const { data } = await axios.get<Play>(`/play/${id}`);
      return data;
    } catch (e) {
      console.error('Error fetching data PlayService.getById:', e);
      return {} as Play;
    }
  },

  async getAll() {
    try {
      const { data } = await axios.get<Play[]>('/play/all');
      return data;
    } catch (e) {
      console.error('Error fetching data PlayService.getAll:', e);
      return [] as Play[];
    }
  },

  async getPlaysPerDate(date: Date) {
    const formattedDate = `${date.getFullYear()}-${date.getMonth()+1}`
    try {
      const { data } = await axios.get<Play[]>(`/play/all/date/${formattedDate}`);
      return data;
    } catch (e) {
      console.error('Error fetching data PlayService.getPlaysPerDate:', e);
      return [] as Play[];
    }
  }
}