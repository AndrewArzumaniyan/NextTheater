import TheaterScreen from "@/components/screens/Theater/TheaterScreen";
import { Play } from "@/interfaces/play.interface";
import { Theater } from "@/interfaces/theater.interface";
import { PlayService } from "@/services/play.service";
import { TheaterService } from "@/services/theater.service";
import { GetStaticProps, NextPage } from "next";
import React, { FC } from "react";

interface TheaterPageProps {
  theater: Theater | null;
  plays: Play[];
}

const TheaterPage:  NextPage<TheaterPageProps> = ({ theater, plays }) => {
  if (!theater) {
    return (
      <div>
        Данные не найдены!
      </div>
    )
  }
  return (
    <TheaterScreen theater={theater} plays={plays} />
  );
}

export async function getStaticPaths() {
  const theaters = await TheaterService.getAll();
  const theatersIds = theaters.map((theater) => theater.theaterId);

  const paths = theatersIds.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any> = async context => {
  const id = context.params?.id ? context.params?.id : 0;
  const theater = await TheaterService.getById(+id);
  const plays = await PlayService.getByTheaterId(+id);

  return {
    props: {
      theater: theater || null, // Если данные не найдены, передаем null
      plays: plays,
    },
    revalidate: 60,
  };
};

export default TheaterPage;