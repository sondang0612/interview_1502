import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  iconSize?: number;
} & React.CSSProperties;

const Maker = (props: Props) => {
  const { iconSize = 32, ...styles } = props;
  return (
    <div
      className="absolute z-10 transition-transform duration-300 ease-out"
      style={styles}
    >
      <FaMapMarkerAlt size={iconSize} color="red" />
    </div>
  );
};

export default Maker;
