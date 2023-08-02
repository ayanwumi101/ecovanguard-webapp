import { useState, useCallback, useEffect } from "react";

const Fetch = (url = "", config = {}, deps = []) => {
  const [isFetching, setIsFetching] = useState(true);
  const [response, setResponse] = useState();
  const [err, setErr] = useState();
  const memoizedFetch = useCallback(async () => {
    await fetch(url, config)
      .then((response) => setResponse(response.json()))
      .catch((err) => setErr(err))
      .finally(() => setIsFetching(false));
    return { isFetching, response, err };
  }, deps);
  useEffect(() => memoizedFetch(), [memoizedFetch]);
};

export default Fetch;
