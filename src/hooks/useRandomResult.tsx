import { useState, useEffect } from "react";
import useStore from "../store";

const useRandomGender = () => {
  const [error, setError] = useState("");
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

    setTotal(updatedTotal);
    setGift(gender);
    await fetch("https://xmas-be.vercel.app/total", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTotal),
    });
  };

  useEffect(() => {
    if (!gift_to) {
      const fetchData = async () => {
        try {
          const response = await fetch("https://xmas-be.vercel.app/total");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setTotal(data);
          const maleCount = data.male || 0;
          const femaleCount = data.female || 0;

          if (maleCount === 0 && femaleCount === 0) {
            setGift("");
          } else if (maleCount === 0) {
            await updateGender("female", data);
          } else if (femaleCount === 0) {
            await updateGender("male", data);
          } else {
            const chosenGender =
              Math.random() < maleCount / (maleCount + femaleCount)
                ? "male"
                : "female";
            await updateGender(chosenGender, data);
          }
        } catch (err) {
          setError((err as Error).message);
        }
      };

      fetchData();
    }
  }, []);

  return { gift_to, error };
};

export default useRandomGender;
