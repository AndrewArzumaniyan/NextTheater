export interface Theater {
  theaterId: number;
  name: string;
  info: string;
  city: string;
  street: string;
  house: string;
  lat: number;
  lng: number;
}

export interface TheaterData {
  theaters: Theater[];
}