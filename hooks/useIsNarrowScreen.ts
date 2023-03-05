import { useState, useEffect } from "react";

const NARROW_BOUNDARY = 450; // pixels

const useIsNarrowScreen = () => {
  const [isNarrow, setIsNarrow] = useState<boolean>(true); //anta at vi bruker en enhet med smal skjerm

  useEffect(() => {
    function handleResize() {
      setIsNarrow(window.innerWidth <= 450);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("screen is narrow?: " + isNarrow);
  return isNarrow;
};

export { useIsNarrowScreen };
