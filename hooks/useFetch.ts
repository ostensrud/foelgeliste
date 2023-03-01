import { useState, useEffect, useRef } from "react";

const useFetchText = (url: string) => {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  type CacheType = { [url: string]: string };

  const cache = useRef<CacheType>({});

  useEffect(() => {
    setLoading(true);
    const doFetch = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(res.status + " " + res.statusText);
        } else {
          const text = await res.text();
          cache.current[url] = text;
          setData(text);
        }
      } catch (e) {
        setError(`Noe feilet: ${e}`);
        setData(undefined);
      } finally {
        setLoading(false);
      }
    };
    if (!url) {
      console.error("No url!");
      return undefined; // throw?
    }
    if (!cache.current[url]) {
      doFetch();
    } else {
    }
  }, [url]);

  return { data, loading, error };
};

export { useFetchText };
