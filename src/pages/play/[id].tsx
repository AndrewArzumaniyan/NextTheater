import PlayScreen from "@/components/screens/Play/PlayScreen";
import { Play } from "@/interfaces/play.interface";
import { PlayService } from "@/services/play.service";
import { GetStaticProps } from "next";
import React, { FC } from "react";

interface PlayPageProps {
  play: Play;
}

const PlayPage: FC<PlayPageProps> = ({ play }) => {
  if (!play) {
    return (
      <div>
        Данные не найдены!
      </div>
    )
  }
  
  return (
    // <></>
    <PlayScreen play={play} />
  );
}

export async function getStaticPaths() {
  const plays = await PlayService.getAll();
  const playsIds = plays.map((play) => play.playId);

  const paths = playsIds.map((id) => ({
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
  const play = await PlayService.getById(+id);

  return {
    props: {
      play: play || null,
    },
    revalidate: 60,
  };
};

export default PlayPage;