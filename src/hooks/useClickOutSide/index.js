import { useEffect, useRef, useState } from "react";

/**
 * @description Handle element state when click outside
 * @usage
 *   Put elementRef in ref of div element you want to handle click outside
 *
 *   const {elementRef,  isVisible, setElementVisible} = useClickOutSide(initState);
 *
 *   <div ref={elementRef}>
 *     ... your code here ...
 *   </div>
 *
 *   Use isVisible, setElementVisible instead of useState
 * */
export const useClickOutSide = (initState) => {
  const [isVisible, setElementVisible] = useState(initState);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const handleKeyDropdown = (e) => {
    if (e.key === "Escape") {
      setElementVisible(false);
    }
  };
  const handleClickOutSide = (e) => {
    if (elementRef.current && !elementRef.current.contains(e.target )) {
      setElementVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("keydown", handleKeyDropdown);
      document.addEventListener("click", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDropdown);
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [isVisible]);

  return { elementRef, isVisible, setElementVisible };
};
