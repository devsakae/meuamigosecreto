import { createContext, useState } from 'react';
import firebase from '../lib/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUser = (info) => {
    const { user: { _delegate } } = info;
    setUser(_delegate);
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(firebase.auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => {
  //     unsubscribe();
  //   }
  // }, []);

  const githubSignIn = async () => {
    try {
      setLoading(true);
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((response) => saveUser(response));
    } finally {
      setLoading(false);
    }
  };

  const githubSignOut = async () => {
    try {
      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false));
    } finally {
      setLoading(false);
    }
  };

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
        loggedUser,
        loading,
        githubSignIn,
        githubSignOut,
        googleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
