import { Play } from "@/interfaces/play.interface";
import React, { FC } from "react";

interface DateHashInterface {
  [month: number]: Date[];
}

interface PlayScreenProps {
  play: Play;
}

const PlayScreen: FC<PlayScreenProps> = ({ play }) => {
  const dates = play.begins.map((begin) => new Date(begin.begin_time)).sort();
  const currentMonth = (new Date(Date.now())).getMonth() + 1 - 1;

  const dateHash: DateHashInterface = dates.reduce((result, date) => {
    const month = date.getMonth() + 1;
    if (!result[month]) {
      result[month] = [];
    }

    result[month].push(date);
    return result
  }, {} as DateHashInterface);

  return (
    <div className="container">
      <h1>{play.playName}</h1>
      <ul>
        {dateHash[currentMonth] && dateHash[currentMonth].map((date) => (
          <li key={date.getTime()}>{date.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayScreen;