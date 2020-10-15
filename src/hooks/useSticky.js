import { useEffect, useState, useRef } from "react";

const BACKGROUND_COLOR = {
  nonsticky: "transparent",
  sticky: "rgba(0, 0, 0, 0.9)",
};

const useSticky = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const header = useRef(null);
 
  const handleScroll = () => {
    window.scrollY > header.current.scrollLeft
      ? setBackgroundColor(BACKGROUND_COLOR.sticky)
      : setBackgroundColor(BACKGROUND_COLOR.nonsticky);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [header.handleScroll]);

  return { backgroundColor, header };
};

export default useSticky;
