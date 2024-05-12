import { createContext, useState } from "react";

export let activeContext = createContext();

export default function ActiveContextProvider(props) {
  const [active, setActive] = useState("");
  return (
    <activeContext.Provider value={{ active, setActive }}>
      {props.children}
    </activeContext.Provider>
  );
}
