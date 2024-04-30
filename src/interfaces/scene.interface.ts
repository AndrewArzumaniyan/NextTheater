import { Theater } from "./theater.interface";

export interface Scene {
  sceneId: number;
  theater: Theater;
  name: string;
}