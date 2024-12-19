import { useState } from "react";
import useStore from "../store";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const useRemovePerson = () => {
  const [error, setError] = useState<string | null>(null);
  const { name, people, setPeople } = useStore();

  const removePerson = async () => {
    if (!name || !people) {
      setError("Invalid name or people list.");
      return;
    }

    console.log("Removing person:", name);
    const p = people.find((p) => p.name === name);

    try {
      const personDocRef = doc(db, "people", p.id);
      await deleteDoc(personDocRef);

      const updatedPeople = people.filter((person) => person.name !== name);
      setPeople(updatedPeople);
      console.log("Person removed successfully.");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred.";
      console.error("Error removing person:", errorMessage);
      setError(errorMessage);
    }
  };

  return { removePerson, error };
};

export default useRemovePerson;
