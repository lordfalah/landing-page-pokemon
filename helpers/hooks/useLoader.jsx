import { useEffect, useState } from "react";

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, () => null);
    }
  }, [isLoading]);

  return isLoading;
};

export default useLoader;
