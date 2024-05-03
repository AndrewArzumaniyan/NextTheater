import { Begin } from "@/interfaces/begin.interface";
import { Place } from "@/interfaces/place.interface";
import React, { FC, useEffect, useState } from "react";
import styles from "./BuyTicket.module.scss";
import { PlaceService } from "@/services/place.service";


interface BuyTicketProps {
  begin: Begin;
}

const BuyTicket: FC<BuyTicketProps> = ({ begin }) => {
  const [placeTypes, setplaceTypes] = useState([] as Place[]);
  
  useEffect(() => {
    (async () => {
      const placeTypesData = await PlaceService.getPlacesByBeginId(begin.begin_id);
      setplaceTypes(placeTypesData);
    })();
  }, []);

  return (
    <div className={styles.buy}>
      <div className="container">
        <div className={styles["place-block"]}>
          {placeTypes.length ? 'loading...' :
            placeTypes.map((placeType) => (
              <div>
                {placeType.places.map((place) => (
                  <span>{place.row_num}-{place.seat_num}</span>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;