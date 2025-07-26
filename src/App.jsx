import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./Firebase/auth"; // Firebase Auth service
import { login, logOut } from "./Store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authService.getCurrentUser((user) => {
      if (user) {
        // Serialize only required user fields to avoid Redux warnings
        dispatch(
          login({
            userData: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              emailVerified: user.emailVerified,
            },
          })
        );
      } else {
        dispatch(logOut());
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [dispatch]);

  if (loading) return <div className="text-center p-8">Loading...</div>; // Or a spinner component

  return (
    <>
      {/* <main className="min-h-screen"> */}
      <NavBar />
        <Outlet />
    
      <Footer />
    </>
  );
}

export default App;
