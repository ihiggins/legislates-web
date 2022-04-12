import { useState, useEffect } from "react";
import { cache, lscache } from "../State/cache";

var useQuery = (
  uri: string,
  persistence: boolean,
  minutes: number,
  skip: boolean
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);
  const [refreshed, refreshFetch] = useState(false);

  useEffect(() => {
    if (skip) {
      setLoading(false);
      return;
    }
    var checkCache = null;
    if (persistence) {
      checkCache = lscache.get(uri);
    } else {
      checkCache = cache.get(uri);
    }
    if (checkCache != null) {
      setData(checkCache);
      setLoading(false);
      return checkCache;
    }
    var promise = fetch(`${process.env.REACT_APP_API}/${uri}`, {
      method: "GET",

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Cookies: document.cookie,
      },
    });

    promise
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 402) {
          setData(false);
          setLoading(false);
        }
      })
      .then((data) => {
        if (data) {
          if (persistence) {
            lscache.set(uri, data, minutes);
          } else {
            cache.set(uri, data);
          }
          setData(data);
          setLoading(false);
        }
      });

    promise.catch((res) => {
      setError(res);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshed, uri]);

  return { loading, error, data };
};

export { useQuery };
