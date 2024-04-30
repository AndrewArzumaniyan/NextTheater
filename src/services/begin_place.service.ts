import { BeginPlace } from "@/interfaces/begin_place.interface";
import axios from "axios"

const API_URL = 'http://localhost:8080/api/v1';

axios.defaults.baseURL = API_URL;

export const BeginPlaceService = {
  async getById(id: number) {
    const { data } = await axios.get<BeginPlace>(`/begin-place/${id}`);
    return data;
  },

  async changeStatus(id: number, status: boolean) {
    const response = await axios.put<BeginPlace>(`/begin-place/${id}`, status);
    return response.data;
  },
}