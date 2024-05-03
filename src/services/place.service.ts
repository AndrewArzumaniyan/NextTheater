import { Place } from "@/interfaces/place.interface";
import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1';

axios.defaults.baseURL = API_URL;

export const PlaceService = {
  async getPlacesByBeginId(id: number) {
    try {
      const { data } = await axios.get<Place[]>(`/place/all/begin/${id}`);
      return data;
    } catch (e) {
      console.error('Error fetching data PlaceService.getPlacesByBeginId:', e);
      return [] as Place[];
    }
  },
}