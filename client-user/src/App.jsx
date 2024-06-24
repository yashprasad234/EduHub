import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course/Course";
import PurchasedCourses from "./pages/purchasedCourses/PurchasedCourses";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/courses/:courseId"} element={<Course />} />
        <Route path={"/purchasedCourses"} element={<PurchasedCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
