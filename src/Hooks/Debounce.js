import React from "react";
import { useEffect,useState } from "react";

export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

  // const [partialValue,setPartialValue] = useState('')
  // const [partialList,setPartialList] = useState([])
  // const [isSearching,setIsSearching] = useState(false)
  // const debouncedSearchTerm = useDebounce(partialValue, 500);
  
  // const partialSearch = async(partialValue)=> {
  //     const url = `${urlEndpoint}/products/product/partial-search?title=${partialValue}`
  //     const res = await fetch(url)
  //     // setIsPageLoading(true)
  //     const resJSON = await res.json()
  //     // setIsPageLoading(false)
  //     console.log("partialSearch()",resJSON.message)
  //     setPartialList(resJSON.message)
      
  //     return resJSON
  //   }
  // useEffect(
  //   () => {
  //     if (debouncedSearchTerm) {
  //       setIsSearching(true);
  //       partialSearch(debouncedSearchTerm)
  //       setIsSearching(false);
  //     } else {
  //       setPartialList([]);
  //       setIsSearching(false);
  //     }
  //   },
  //   [debouncedSearchTerm]
  // );