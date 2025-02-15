import { useState, useEffect } from "react";

const useDeviceType = (
  breakpoints = {
    mobile: 768,
    desktop: 1920,
  }
) => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const getDeviceType = () => {
      const width = window.innerWidth;

      if (width < breakpoints.mobile) {
        return "mobile";
      } else if (width < breakpoints.desktop) {
        return "tablet";
      } else {
        return "desktop";
      }
    };

    setDeviceType(getDeviceType());

    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  return { deviceType };
};

export default useDeviceType;
