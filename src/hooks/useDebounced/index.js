import AwesomeDebouncePromise from "awesome-debounce-promise";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";

// Generic reusable hook
export const useDebouncedSearch = (
  searchFunction,
  timeDebounced = 300
) => {
  // Handle the input text state
  const [inputText, setInputText] = useState("");

  // Debounce the original search async function
  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, timeDebounced)
  );

  const searchResults = useAsync(async () => {
    if (inputText.length < 2) {
      return [];
    } else {
      return debouncedSearchFunction(inputText);
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
};
