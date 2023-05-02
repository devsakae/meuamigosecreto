import { MouseEventHandler, createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export interface MASContextType {
  user?: any,
  loading: boolean,
  signOut: MouseEventHandler,
  googleSignIn: MouseEventHandler,
  fetchMyGifts: Function,
}

const MASContext = createContext<MASContextType | null>(null);

export const MASProvider = ({ children }: any) => {
  const { user, userLoading, signOut, googleSignIn } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(userLoading);
  }, [userLoading])

  const fetchMyGifts = async () => {
    try {
      const response = await fetch('/api/getGifts');
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MASContext.Provider value={{
      user,
      loading,
      signOut,
      googleSignIn,
      fetchMyGifts,
    }}>
      { children }
    </MASContext.Provider>
  )
}

export const MASConsumer = MASContext.Consumer;

export default MASContext;