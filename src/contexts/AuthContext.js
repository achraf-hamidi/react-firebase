// import React, { useContext, useState, useEffect } from "react";

// import { app } from "../firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setcurrentUser] = useState();

//   function Signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }
//   useEffect(() => {
//     const unSubscribe = auth.onAuthStateChanged((user) => {
//       setcurrentUser(user);
//     });
//     return unSubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     Signup,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
