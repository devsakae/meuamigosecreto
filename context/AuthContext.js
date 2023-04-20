import Router from 'next/router';
import { createContext, useState } from 'react';
import firebase from '../lib/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUser = (info) => {
    const { user: { _delegate } } = info;
    setUser(_delegate);
    localStorage.setItem('mas_user_info', JSON.stringify(_delegate));
    Router.push('/perfil');
  }

  const githubSignIn = () => {
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

  const githubSignOut = () => {
    try {
      Router.push('/');
      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false));
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = () => {
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
