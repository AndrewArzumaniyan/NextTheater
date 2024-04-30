import { Actor } from "./actor.interface";
import { Begin } from "./begin.interface";
import { Interval } from "./interval.interface";

export interface Play {
  playId: number;
  theaterId: number;
  theaterName: string;
  directorName: string;
  directorInfo: string;
  playName: string;
  playInfo: string;
  playGenre: string;
  playRating: number;
  duration: any;
  actors: Actor[];
  begins: Begin[];
}