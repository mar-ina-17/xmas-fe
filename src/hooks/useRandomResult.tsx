import { useState, useEffect } from "react";
import useStore from "../store";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const useRandomGender = () => {
  const [error, setError] = useState<string>("");
  const { gift_to, setGift, setTotal } = useStore();

  const updateGender = async (
    gender: string,
    currentTotal: { male: number; female: number }
  ) => {
    const updatedTotal = {
      male: gender === "male" ? currentTotal.male - 1 : currentTotal.male,
      female:
        gender === "female" ? currentTotal.female - 1 : currentTotal.female,
    };

    try {
      // Update the "roulette/total" document with the new counts
      const totalDocRef = doc(db, "roulette", "total");
      await setDoc(totalDocRef, updatedTotal, { merge: true });

      // Update the store with the new totals and set the selected gift
      setTotal(updatedTotal);
      setGift(gender);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
    }
  };

  useEffect(() => {
    if (!gift_to) {
      const fetchData = async () => {
        try {
          // Fetch the total gender counts from the "roulette/total" document
          const totalDocRef = doc(db, "roulette", "total");
          const totalSnapshot = await getDoc(totalDocRef);

          if (!totalSnapshot.exists()) {
            throw new Error("Total data not found.");
          }

          const data = totalSnapshot.data();
          const maleCount = data.male || 0;
          const femaleCount = data.female || 0;

          if (maleCount === 0 && femaleCount === 0) {
            setGift(""); // No available genders left
            return;
          }

          // Randomly select a gender based on the remaining counts
          const chosenGender =
            maleCount === 0
              ? "female"
              : femaleCount === 0
              ? "male"
              : Math.random() < maleCount / (maleCount + femaleCount)
              ? "male"
              : "female";

          // Update the selected gender and totals
          await updateGender(chosenGender, {
            male: maleCount,
            female: femaleCount,
          });
        } catch (err) {
          const errorMessage =
            err instanceof Error ? err.message : "An unknown error occurred.";
          setError(errorMessage);
        }
      };

      fetchData();
    }
  }, [gift_to, setGift, setTotal]);

  return { gift_to, error };
};

export default useRandomGender;
