import { begin_place_help } from "./begin_place.interface";
import { Scene } from "./scene.interface";

export interface place_help {
  placeId: number;
  scene: Scene;
  placeType: string;
  rowNum: number;
  seatNum: number;
}

export interface Place {
  id: number;
  price: number;
  placeType: string;
  places: begin_place_help[];
}