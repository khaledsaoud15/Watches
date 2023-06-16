import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
