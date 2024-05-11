import HomeScreen from "@/components/screens/Home/HomeScreen";
import { Play } from "@/interfaces/play.interface";
import { Theater } from "@/interfaces/theater.interface";
import { PlayService } from "@/services/play.service";
import { TheaterService } from "@/services/theater.service";
import { GetStaticProps } from "next";
import React, { FC } from "react";

interface HomePageProps {
  theaters: Theater[];
  plays: Play[];
}

const HomePage: FC<HomePageProps> = ({ theaters, plays }) => {
  return (
    <HomeScreen theaters={theaters} plays={plays} />
  );
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const theaters = await TheaterService.getAll();
  const currentDate = new Date(Date.now());
  const plays = await PlayService.getPlaysPerDate(currentDate);

  return {
    props: {
      theaters: theaters || null, // Если данные не найдены, передаем null
      plays: plays || null,
    },
    revalidate: 60,
  };
};

export default HomePage;