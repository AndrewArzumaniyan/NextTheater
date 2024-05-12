import { Place } from "@/interfaces/place.interface";
import React, { FC, FormEvent, useMemo, useState } from "react";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";
import axios from "axios";

import styles from "./BuyTicket.module.scss";
import { BeginPlaceService } from "@/services/begin_place.service";
import { PlaceService } from "@/services/place.service";

interface BuyTicketScreenProps {
  places: Place[];
  beginId: number;
}

const BuyTicketScreen: FC<BuyTicketScreenProps> = ({ places, beginId }) => {
  const [newPlaces, setNewPlaces] = useState<Place[]>(places);

  const buyTicket = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const placeTypeElement = form.elements.namedItem('placeType') as HTMLSelectElement;
    const rowElement = form.elements.namedItem('row') as HTMLInputElement;
    const seatElement = form.elements.namedItem('seat') as HTMLInputElement;
  
    const placeType = placeTypeElement.value;
    const row = rowElement.value;
    const seat = seatElement.value;
  
    const begin_place = newPlaces[+placeType]?.places.find(
      (place) => place.row_num === +row && place.seat_num === +seat
    );
  
    if (begin_place) {
      if (begin_place.status) {
        alert('Место уже занято!');
        return;
      }
      BeginPlaceService.changeStatus(begin_place.begin_place_id, true)
        .then(() => {
          (async() => {
            const places = await PlaceService.getFreePlacesByBeginId(beginId)
            setNewPlaces(places);
          })().then(() => {
            alert('Поздравляем! Билет куплен.')
          })
        })
        .catch(error => {
          console.error(error);
      });
    }
  };

  return (
    <>
      <Header title="Билеты" />

      <main className={styles.main}>
        <div className="container">
          <form onSubmit={buyTicket}>
          <div className={styles.inputBlock}>
              <label htmlFor="placeType">ряд</label>
              <select name="placeType" id="placeType">
                {places.map((place, i) => (
                  <option key={i} value={i}>{place.placeType}</option>
                ))}
              </select>
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="row">ряд</label>
              <input name="row" type="number" />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="seat">место</label>
              <input name="seat" type="number" />
            </div>

            <button type="submit" className="big-btn">купить</button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BuyTicketScreen;