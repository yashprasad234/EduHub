import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course/Course";
import PurchasedCourses from "./pages/purchasedCourses/PurchasedCourses";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/courses/:courseId"} element={<Course />} />
        <Route path={"/purchasedCourses"} element={<PurchasedCourses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
