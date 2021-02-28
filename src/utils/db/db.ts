import { useState, useEffect } from "react";
import { db } from "../firebase";

export const useDb = () => {
  const [doc, setDoc] = useState(null);
  useEffect(() => {
    db.collection("report")
      .get()
      .then((docs) => {
        docs.forEach((doc) => setDoc(doc.data()));
      });
  }, []);
  return doc;
};
