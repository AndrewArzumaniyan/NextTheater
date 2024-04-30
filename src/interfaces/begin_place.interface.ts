export interface begin_place_help {
  begin_place_id: number;
  status: boolean;
  row_num: number;
  seat_num: number;
}

export interface BeginPlace {
  beginPlaceId: number;
  place_id: number;
  begin_id: number;
  status: boolean
}