import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";



const Portal = ({ containerId, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (isMounted) {
    return ReactDOM.createPortal(
      children,
      document.getElementById(containerId),
    );
  }
  return null;
};

export default Portal;
