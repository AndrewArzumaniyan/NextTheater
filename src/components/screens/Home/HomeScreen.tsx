import { Play } from "@/interfaces/play.interface";
import { Theater } from "@/interfaces/theater.interface";
import Header from "@/components/UI/Header/Header";
import MonthBLock from "./MonthBlock/MonthBlock";
import Footer from "@/components/UI/Footer/Footer";
import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import styles from "./HomeScreen.module.scss"
import { PlayService } from "@/services/play.service";
import { cardElementInterface } from "@/interfaces/CardElement.interface";
import CardBlock from "@/components/UI/CardBlock/CardBlock";

interface HomeScreenProps {
  theaters: Theater[];
  plays: Play[];
}

const HomeScreen: FC<HomeScreenProps> = ({ theaters, plays }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPlays, setSelectedPlays] = useState<Play[]>(plays);
  const [playCardElements, setplayCardElements] = useState<cardElementInterface[]>([]);

  const theaterCardElements: cardElementInterface[] = theaters.map((theater) => {
    return {
      title: theater.name,
      subtitle: '',
      btnText: 'страница театра',
      btnHref: `/theater/${theater.theaterId}`,
      bottomText: `г.${theater.city}, улица${theater.street}, дом ${theater.house}`
    }
  })

  useEffect(() => {
    let tmpPlayCardElements: cardElementInterface[] = !selectedPlays.length ? [] : selectedPlays.map((play) => {
      return {
        title: play.playName,
        subtitle: `Режиссер: ${play.directorName}`,
        btnText: 'страница спектакля',
        btnHref: `/play/${play.playId}`,
        bottomText: `${play.theaterName}`
      }
    });
    
    setplayCardElements(tmpPlayCardElements);
  }, [selectedPlays]);

  const monthClickHandler = async function (event: MouseEvent) {
    setLoading(true);
    const targetElement = event.currentTarget as HTMLElement;
    console.log(targetElement)

    let month = targetElement.dataset.month;
    if (!month) return;
    const date = new Date((new Date(Date.now())).getFullYear(), +month - 1);

    const playsData = await PlayService.getPlaysPerDate(date);
    console.log(playsData)
    setSelectedPlays(playsData);
    setLoading(false);
  }

  return (
    <>
      <Header title="Главная" />
      <main className={styles.main}>
        <div className="container">
          <MonthBLock monthClickHandler={monthClickHandler} />
        </div>

        {loading ? 'loading...' :
        <CardBlock cardElements={playCardElements} title="Спектакли" />
        }

        <CardBlock cardElements={theaterCardElements} title="Все театры" />
      </main>

      <Footer />
    </>
  );
}

export default HomeScreen;