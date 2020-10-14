import { useEffect, useState, useRef } from "react";

const BACKGROUND_COLOR = {
  nonsticky: "transparent",
  sticky: "rgba(0, 0, 0, 0.3)",
  stickyProjects: "rgba(0, 0, 0, 0.9)",
  white: "#b6b6b6",
};

const useSticky = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const header = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const app = useRef(null);

  const handleTransparent = () => {
    window.scrollY > header.current.scrollLeft
      ? setBackgroundColor(BACKGROUND_COLOR.sticky)
      : setBackgroundColor(BACKGROUND_COLOR.nonsticky);
  };

  const handleBlack = (header) => {
    window.scrollY >= header - 100 &&
      setBackgroundColor(BACKGROUND_COLOR.stickyProjects);
  };

  const handleWhite = (header, projects) => {
    console.log(window.scrollY);
    console.log(header + projects);

    window.scrollY >= header + projects - 100 &&
      setBackgroundColor(BACKGROUND_COLOR.white);
  };
  const handleScroll = () => {
    handleTransparent();
    handleBlack(header.current.getBoundingClientRect().height);
    handleWhite(
      header.current.getBoundingClientRect().height,
      projects.current.getBoundingClientRect().height
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [header.handleScroll, about.handleScroll, projects.handleScroll]);

  return { backgroundColor, header, about, projects, app };
};

export default useSticky;
