import { BeginPlace } from "@/interfaces/begin_place.interface";
import axios from "axios"

const API_URL = 'http://localhost:8080/api/v1';

axios.defaults.baseURL = API_URL;

export const BeginPlaceService = {
  async getById(id: number) {
    try {
      const { data } = await axios.get<BeginPlace>(`/begin-place/${id}`);
      return data;
    } catch (e) {
      console.error("Eror fetching data BeginPlaceService.getById:", e);
      return [] as BeginPlace[];
    }
  },

  async changeStatus(id: number, status: boolean) {
    try {
      const { data } = await axios.put<BeginPlace>(`/begin-place/${id}`, JSON.stringify(status), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return data;
    } catch (e) {
      console.error("Eror putting data BeginPlaceService.changeStatus:", e);
      return {} as BeginPlace;
    }   
  },
}