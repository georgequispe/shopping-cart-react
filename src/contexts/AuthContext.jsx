import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem("user") || null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", user || "");
    localStorage.setItem("admin", admin ? "true" : "false");
  }, [user, admin]);

  const Login = (username) => {
    const token = `fake-token-${username}`;
    if (username === "admin@gmail.com") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
    localStorage.setItem('authToken', token);
    setUser(username);
  };

  const Logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    setUser(null);
    setAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, Login, Logout, admin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

