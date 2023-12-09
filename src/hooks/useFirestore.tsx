import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const useFirestore = <Type,>(collectionName: string): Type[] => {
  const [state, setState] = React.useState<Type[]>(
    JSON.parse(sessionStorage.getItem(collectionName)!)
  );
  React.useEffect(() => {
    if (!state)
      getDocs(collection(db, collectionName)).then((querySnapshot) =>
        setState(querySnapshot.docs.map((doc) => doc.data() as Type))
      );
  }, []);
  sessionStorage.setItem(collectionName, JSON.stringify(state));
  return state;
};

export default useFirestore;
