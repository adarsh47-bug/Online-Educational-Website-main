import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/CoursesPg";
import Header from "./components/Header/Header";
import LoginPg from "./pages/LoginPg";
import RegisterPg from "./pages/RegisterPg";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BlogPg from "./pages/BlogPg";
import AboutPg from "./pages/AboutPg";
import EnrollPg from "./pages/EnrollPg";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/register" element={<RegisterPg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/blog" element={<BlogPg />} />
        <Route path="/enroll/:courseId" element={<EnrollPg />} />
        {/* <Route path="/courses/:id" element={<LoginPg />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;