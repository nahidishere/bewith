import "./App.css";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Chats from "./Pages/Chats/Chats";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
