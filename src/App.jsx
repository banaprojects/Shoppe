import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import MainBody from "./components/MainBody";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
// import Footer from "./components/Footer";
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <main>
        <Nav searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        <Routes>
          <Route index element={<MainBody searchTerm={searchTerm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}
