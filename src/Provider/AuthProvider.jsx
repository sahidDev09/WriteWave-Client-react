/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

// all social login provider

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create new account or user

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //upadate profile code

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //login user

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //on state change for store data

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // google login

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  //logout

  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  // pass value through usecontext

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    loading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
