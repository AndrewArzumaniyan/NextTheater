import { Place } from "@/interfaces/place.interface";
import { PlaceService } from "@/services/place.service";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import BuyTicketScreen from "@/components/screens/BuyTicket/BuyTicket";

interface BuyTicketPageProps {
  places: Place[];
  beginId: number;
}

const BuyTicketPage: FC<BuyTicketPageProps> = ({ places, beginId }) => {
  return (
    <BuyTicketScreen places={places} beginId={beginId} />
  );
};

export const getServerSideProps: GetServerSideProps<BuyTicketPageProps> = async (context) => {
  const id = context.query.id || 0;

  if (!id) {
    return { notFound: true };
  }

  const begin_id = +id;

  const places = await PlaceService.getFreePlacesByBeginId(begin_id);
  return {
    props: { 
      places,
      beginId: begin_id
    }
  };
};

export default BuyTicketPage;