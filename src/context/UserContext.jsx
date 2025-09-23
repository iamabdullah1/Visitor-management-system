import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../components/notification";
import mockApi from "../utils/mockApi";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [loggedUser, setLoggedUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        // Mock token validation - check if token exists in localStorage
        const token = localStorage.getItem("token");
        const userInfo = localStorage.getItem("userInfo");

        if (token && userInfo) {
          const userData = JSON.parse(userInfo);
          setUser(userData);
          setIsAuthenticated(true);
          setUsername(userData.username);
          setLoggedUser(userData);
        } else {
          // No valid session found
          Notification.showErrorMessage("Sorry", "Session has Expired!");
          localStorage.clear();
          setUser();
          navigate("/login");
        }
      } catch (err) {
        Notification.showErrorMessage("Error", "Session validation failed!");
        localStorage.clear();
        setUser();
        navigate("/login");
      }
    };
    verifyToken();
  }, []);

  const logout = async () => {
    try {
      // Clear all authentication data
      localStorage.clear();
      setUser(null);
      setIsAuthenticated(false);
      setUsername("");
      setIslogin(false);
      setLoggedUser(null);

      // Navigate to login page
      navigate("/login");

      return { success: true };
    } catch (err) {
      console.error("Logout error:", err);
      return { success: false, error: err.message };
    }
  };

  return (
    <UserContext.Provider value={{
      isAuthenticated,
      user,
      setUser,
      username,
      setUsername,
      islogin,
      setIslogin,
      loggedUser,
      setLoggedUser,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
}
