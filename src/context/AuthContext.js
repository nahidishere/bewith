import React, { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [locading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      navigate("/chats");
    });
  }, [user, navigate]);
  const value = { user };
  return (
    <AuthContext.Provider value={value}>
      {!locading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
