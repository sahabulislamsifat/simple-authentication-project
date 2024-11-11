import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const name = "Sahabul Islam Sifat";

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("currently logged user", currentUser);
  //     setUser(currentUser);
  //   } else {
  //     console.log("No user login");
  //     setUser(null);
  //   }
  // });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    name,
    user,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      {/* {//* main part who will access to this context.....} */}
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;

//*  Create context with null as default
//* Create Provider
//* Set a default value  with something (authInfo)
//* [Attention please !!!]
//* use the  authProvider in the main,jsx
//* access the children inside the authProvider in the main.jsx
//* export AuthProvider
