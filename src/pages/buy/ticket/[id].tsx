import { Place } from "@/interfaces/place.interface";
import { PlaceService } from "@/services/place.service";
import { PlayService } from "@/services/play.service";
import { GetServerSideProps } from "next";
import React, { FC } from "react";

interface BuyTicketPageProps {
  places: Place[];
}

const BuyTicketPage: FC<BuyTicketPageProps> = ({ places }) => {
  return (
    <>
      
    </>
  );
};

export const getServerSideProps: GetServerSideProps<BuyTicketPageProps> = async (context) => {
  const id = context.query.id;

  if (!id) {
    return { notFound: true };
  }

  const begin_id = +id;

  try {
    const places = await PlaceService.getPlacesByBeginId(begin_id);
    return { props: { places } };
  } catch (error) {
    console.error("Error fetching places:", error);
    return { notFound: true };
  }
};

export default BuyTicketPage;