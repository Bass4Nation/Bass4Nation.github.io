import React, { useState, useEffect } from "react";
import { useGetFirebaseCollection } from "../hooks/useExpressFriebaseHook";
import { useToggleState } from "../hooks/useToggleState";

const FirebaseData = () => {
const { test } = useGetFirebaseCollection();     // const [data, setData] = useState(null);


  console.log(test);

  return (
    <>
    <section>
        <h1>Get Data from Firebase</h1>
        <button onClick={() => setTrigger()}>Get Data from Firebase</button>
    </section>
    </>
  );
};

export default FirebaseData;
