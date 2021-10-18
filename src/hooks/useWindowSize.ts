import { useEffect, useState } from "react";

function getSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function useWindowSize() {
  const [size, setSize] = useState<{ width: number; height: number }>();

  useEffect(() => {
    function handleResize() {
      setSize(getSize());
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
