import { createContext, useEffect, useState } from 'react';
import firebase from '../lib/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setLoading] = useState(true);

  const saveUser = (info) => {
    const { user: { _delegate } } = info;
    setUser(_delegate);
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  const signOut = async () => {
    try {
      setLoading(true);
      return firebase.auth().signOut();
    } finally {
      setLoading(false);
    }
  }

  const googleSignIn = async () => {
    try {
      setLoading(true);
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((response) => saveUser(response));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userLoading,
        signOut,
        googleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
