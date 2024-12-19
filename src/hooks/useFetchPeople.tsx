import { useState, useEffect } from "react";
import useStore from "../store";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Person {
  name: string;
  id: string;
}

const useFetchPeople = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { people, setPeople } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data from Firestore...");
      try {
        setLoading(true);

        // Fetch the collection from Firestore
        const querySnapshot = await getDocs(collection(db, "people"));

        // Map the data to the expected structure
        const result: Person[] = querySnapshot.docs.map((doc) => ({
          name: doc.data().name, // Adjust based on your schema
          id: doc.id, // Adjust based on your schema
        }));

        // Sort the result alphabetically by name
        const sortedPeople = result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        // Update the state
        setPeople(sortedPeople);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred.";
        console.error("Error fetching people:", errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setPeople]);

  return { people, loading, error };
};

export default useFetchPeople;
