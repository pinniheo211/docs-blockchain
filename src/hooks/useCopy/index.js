import { useEffect, useState } from "react";

const useCopy = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  useEffect(() => {
    if (copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
    }
  }, [copySuccess]);
  const onCopy = (value) => {
    try {
      navigator.clipboard.writeText(value).then(
        () => {
          setCopySuccess(true);
        },
        () => {
          setCopySuccess(false);
        }
      );
    } catch (error) {
      setCopySuccess(false);
    }
  };
  return { copySuccess, onCopy };
};
export default useCopy;
