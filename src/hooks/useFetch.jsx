import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong");
        }
        const data = await req.json();
        setData(data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
