import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
