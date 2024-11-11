import React, { createContext } from "react";

export const AuthContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const authInfo = {
    name: "Akashe batashe chol sathi ure jaii dana meleee.......",
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
