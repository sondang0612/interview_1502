import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  iconSize?: number;
  onClick: (value: any) => void;
} & React.CSSProperties;

const Maker = ({ iconSize = 32, onClick, ...styles }: Props) => {
  return (
    <>
      <div
        className="absolute z-10 transition-transform duration-300 ease-out cursor-pointer"
        style={styles}
        onClick={onClick}
      >
        <FaMapMarkerAlt size={iconSize} className="text-red-500" />
      </div>
    </>
  );
};

export default Maker;
