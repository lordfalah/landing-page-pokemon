import { useEffect, useState } from "react";

const useWidthObject = (element) => {
  const [widthObject, setWidthObject] = useState({ width: undefined });

  useEffect(() => {
    const eventSize = () => {
      setWidthObject({ width: element.current.offsetWidth });
    };

    eventSize();
    window.addEventListener("resize", eventSize);

    return () => window.removeEventListener("resize", eventSize);
  }, [element]);

  return widthObject;
};

export default useWidthObject;
