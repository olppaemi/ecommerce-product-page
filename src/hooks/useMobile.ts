import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

export default function useMobile() {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (size) {
      if (size.width <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [size]);

  return isMobile;
}
