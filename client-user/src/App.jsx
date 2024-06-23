import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Login2 from "./pages/login2/Login2";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course/Course";
import PurchasedCourses from "./pages/purchasedCourses/PurchasedCourses";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Signup2 from "./pages/signup/Signup2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Register />} />
        <Route path={"/signup2"} element={<Signup2 />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/login2"} element={<Login2 />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/courses/:courseId"} element={<Course />} />
        <Route path={"/purchasedCourses"} element={<PurchasedCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
