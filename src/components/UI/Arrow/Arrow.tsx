import React, { FC } from "react";

interface directionMapInterface {
  [key: string]: number;
}

const directionMap: directionMapInterface = {
  right: 180,
  left: 0,
  down: 270,
  up: 90,
}

interface ArrowProps {
  width: number;
  height: number;
  fill: string;
  direction: string;
}

const Arrow: FC<ArrowProps> = ({ width, height, fill, direction }) => {
  const styles = {
    transform: `rotate(${directionMap[direction]}deg)`
  }

  return (
    <div style={styles}>
      <svg width={width} height={height} viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.678606 16.6867C0.467069 16.8642 0.439477 17.1795 0.616978 17.3911C0.794479 17.6026 1.10986 17.6302 1.32139 17.4527L0.678606 16.6867ZM1.32139 17.4527L20.4725 1.38302L19.8297 0.616974L0.678606 16.6867L1.32139 17.4527Z" fill={fill}/>
        <path d="M1.40965 16.7957C1.19811 16.6182 0.882732 16.6458 0.705231 16.8573C0.527731 17.0689 0.555323 17.3842 0.76686 17.5617L1.40965 16.7957ZM20.5608 32.8654L1.40965 16.7957L0.76686 17.5617L19.918 33.6314L20.5608 32.8654Z" fill={fill}/>
      </svg>
    </div>
  );
}

export default Arrow;