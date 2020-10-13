import { useEffect, useState, useRef } from "react";

const BACKGROUND_COLOR = {
  nonsticky: "transparent",
  sticky: "rgba(0, 0, 0, 0.3)",
  white: "#b6b6b6",
};

const useSticky = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const header = useRef(null);
  const about = useRef(null);

  const handleScroll = () => {
    window.scrollY > 60
      ? setBackgroundColor(BACKGROUND_COLOR.sticky)
      : setBackgroundColor(BACKGROUND_COLOR.nonsticky);
    window.scrollY > 2700 && setBackgroundColor(BACKGROUND_COLOR.white);
    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [header.handleScroll, about.handleScroll]);

  return { backgroundColor, header, about };
};

export default useSticky;
