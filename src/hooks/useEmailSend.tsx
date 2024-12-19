import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const useEmailSend = ({ name, gift_to }: { name: string; gift_to: string }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => emailjs.init(import.meta.env.VITE_PUBLIC_EMAIL_KEY), []);

  const sendEmail = async () => {
    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPATE_ID,
        {
          to_name: name,
          GIFT_RESULT: gift_to,
        }
      );
      console.log("Email successfully sent! Check your inbox.");
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error };
};

export default useEmailSend;
