/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../FirebaseConfig/firebase.config";

export const AuthContext = createContext(null);

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer auth change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const allData = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={allData}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
