import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useTimedQuery(queryKeys: string[], timer = 3000) {
  const router = useRouter();
  const [matches, setMatch] = useState([]);
  const [isMatch, setIsMatch] = useState(false);
  useEffect(() => {
    queryKeys.forEach((queryItem) => {
      if (router.query[queryItem]) {
        setMatch([...matches, queryItem]);
      }
    });
    if (queryKeys.some((queryItem) => !!router.query[queryItem])) {
      setIsMatch(true);
    }
    {
      setIsMatch(false);
    }
  }, [router.pathname, router.query]);
  let timed;
  useEffect(() => {
    setTimeout(() => {
      const query = {
        ...router.query,
      };
      matches.forEach((matchItem) => {
        delete query[matchItem];
      });
      router.push({
        pathname: router.pathname,
        query,
      });
    }, timer);
    return () => {
      clearTimeout(timed);
    };
  }, [matches]);

  return { matches, isMatch };
}
