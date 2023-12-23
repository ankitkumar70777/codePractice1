"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "../../../hooks/useDebounce";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.get("query")?.toString();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleInput = (e) => {
    console.log('set------------',);
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };


  let debounceTimeout;
  const debounceCallFn = (e) => {
    // Clear the previous timeout if it exists
    if (debounceTimeout) {
      console.log('clear------------',);
      clearTimeout(debounceTimeout);
    }

     // Set a new timeout for 500 milliseconds
    debounceTimeout = setTimeout(() => {
      handleInput(e)
    }, 2000);
}



  return (
    <div>
      <label htmlFor='searchbox'></label>
      <input
        type='search'
        id='searchbox'
        name='searchbox'
        placeholder='type anything'
        onChange={debounceCallFn}
        defaultValue={searchParamsString}
      />
    </div>
  );
};

export default SearchBox;
