import { useEffect, useState } from "react";

const resizeWindow = () => {
  const [resize, setResize] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    const eventResize = () => {
      setResize({ width: window.innerWidth, height: window.innerHeight });
    };

    eventResize();
    window.addEventListener("resize", eventResize);

    return () => window.removeEventListener("resize", eventResize);
  }, []);

  return resize;
};

export default resizeWindow;
