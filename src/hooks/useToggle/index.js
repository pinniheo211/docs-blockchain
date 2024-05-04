import { useState } from "react";

const useToggle = (stateDefault) => {
  const [isState, setIsState] = useState(stateDefault);
  const toggle = () => setIsState(!isState);
  return { isState, toggle };
};
export default useToggle;
