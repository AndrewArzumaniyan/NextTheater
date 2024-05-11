import { Play } from "@/interfaces/play.interface";
import React, { FC } from "react";

interface DateHashInterface {
  [month: number]: Date[];
}

interface PlayScreenProps {
  play: Play;
}

const PlayScreen: FC<PlayScreenProps> = ({ play }) => {
  

  return (
    <div className="container">
      {/* <h1>{play.playName}</h1>
      <ul>
        {dateHash[currentMonth] && dateHash[currentMonth].map((date) => (
          <li key={date.getTime()}>{date.toLocaleString()}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default PlayScreen;