import { useState, useEffect } from "react";
import useStore from "../store";

interface Person {
  name: string;
  email: string;
}

const useFetchPeople = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { people, setPeople } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://xmas-be.vercel.app/people");

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result: Person[] = await response.json();
        setPeople(
          result.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { people, loading, error };
};

export default useFetchPeople;
