import { useState } from "react";
import useStore from "../store";

const useRemovePerson = () => {
  const [error, setError] = useState<string | null>(null);
  const { name, people, setPeople } = useStore();

  const removePerson = async () => {
    try {
      const response = await fetch(
        `https://xmas-be.vercel.app/people/${name}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete the person: ${response.statusText}`);
      }

      const updatedPeople = people.filter((person) => person.name !== name);
      setPeople(updatedPeople);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return { removePerson, error };
};

export default useRemovePerson;
