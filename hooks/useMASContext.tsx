import { useContext } from "react";
import MASContext, { MASContextType } from '../context/MASContext';

const useMASContext = () => useContext(MASContext) as MASContextType;

export default useMASContext;