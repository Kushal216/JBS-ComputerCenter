import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/auth";
import { login, logOut } from "./Store/authSlice";
import { Outlet } from "react-router-dom"; // ⬅️ Required for nested routing

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        dispatch(logOut());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return null;

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <Outlet />{" "}
        
      </main>
      <Footer />
    </>
  );
}

export default App;
