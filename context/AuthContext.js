import { createContext, useEffect, useState } from 'react';
import firebase from '../lib/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUser = (info) => {
    const { user: { _delegate } } = info;
    console.log('Logou:', _delegate);
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

  // const githubSignIn = async () => {
  //   try {
  //     setLoading(true);
  //     return firebase
  //       .auth()
  //       .signInWithPopup(new firebase.auth.GithubAuthProvider())
  //       .then((response) => saveUser(response));
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const githubSignOut = async () => {
  //   try {
  //     return firebase
  //       .auth()
  //       .signOut()
  //       .then(() => setUser(false));
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
        loading,
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
