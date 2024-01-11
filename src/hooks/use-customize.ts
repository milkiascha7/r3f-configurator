import { useContext } from "react";
import { CustomizeContext } from "../contexts/Customize";



export const useCustomize = () => {
    const Context = useContext(CustomizeContext);
    return Context;
  };