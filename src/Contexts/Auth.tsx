import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { db } from "./../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "@tanstack/react-router";
const AuthContext: any = createContext();
const Auth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<null>(null);
  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const documentId = doc(db, "users", user.uid);
  //       const documentSnap = await getDoc(documentId);
  //       if (documentSnap.exists()) {
  //         setCurrentUser({
  //           userId: user.uid,
  //           email: user.email,
  //           ...documentSnap.data(),
  //         });
  //       } else {
  //         router.update({
  //           context: {
  //             ...router.options.context,
  //             userId: user.uid,
  //             email: user.email,
  //             ...documentSnap.data(),
  //           },
  //         });
  //         setCurrentUser({
  //           uid: user.uid,
  //           email: user.email,
  //           ...documentSnap.data(),
  //         });
  //       }
  //     } else {
  //       setCurrentUser(null);
  //     }
  //   });
  //   return unsub;
  // }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default Auth;
