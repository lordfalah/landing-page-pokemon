import { useEffect, useState } from "react";

const useScrollTop = () => {
  const [scroll, setScroll] = useState({ top: undefined });

  useEffect(() => {
    const scrollTop = () => {
      setScroll({
        top: window.scrollY,
      });
    };

    scrollTop();
    window.addEventListener("scroll", scrollTop);

    return () => window.removeEventListener("scroll", scrollTop);
  }, []);

  return scroll;
};

export default useScrollTop;
