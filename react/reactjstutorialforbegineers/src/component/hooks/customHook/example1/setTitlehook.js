import React, { useEffect } from "react";

function useSetTitlehook(count) {
  useEffect(() => {
    document.title = `count : ${count}`;
  }, [count]);
}

export default useSetTitlehook;
