import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email ,password);
  }


  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }


  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }


  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }


  const updateUserProfile = (photo, name) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('user in the use state changed', currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    }
  }, [])

  const userInfo = { user, loading, createUser, signIn, googleSignIn,logOut, updateUserProfile }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;