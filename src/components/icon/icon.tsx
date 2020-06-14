import * as React from "react";
import DownChevron from "./icons/down-chevron.svg"

export interface IconProps {
  name: "down-chevron"
  className: string;
  height?: string;
  onClick?: () => void;
}

const getSVG = (name: string) => {
  switch (name) {
    case "down-chevron":
      return (
        
      );
    default:
      return <path />;
  }
};

/** A component to add simple SVGs */
export const Icon: React.FC<IconProps> = ({
  name = "user",
  className = "",
  height = "1rem",
  onClick
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={getViewBox(name)}
    className={className}
    height={height}
    role="img"
    onClick={onClick}
  >
    {getPath(name)}
  </svg>
);
