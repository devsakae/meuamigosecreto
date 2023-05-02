import { MouseEventHandler, createContext } from "react";
import useAuth from "../hooks/useAuth";

export interface MASContextType {
  user?: any,
  loading: boolean,
  signOut: MouseEventHandler,
  googleSignIn: MouseEventHandler,
}

const MASContext = createContext<MASContextType | null>(null);

export const MASProvider = ({ children }: any) => {
  const { user, loading, signOut, googleSignIn } = useAuth();

  return (
    <MASContext.Provider value={{
      user,
      loading,
      signOut,
      googleSignIn
    }}>
      { children }
    </MASContext.Provider>
  )
}

export const MASConsumer = MASContext.Consumer;

export default MASContext;