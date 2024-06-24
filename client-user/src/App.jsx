import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Login2 from "./pages/login2/Login2";
import Courses from "./pages/courses/Courses";
// import PurchasedCourses from "./pages/purchasedCourses/PurchasedCourses";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Signup2 from "./pages/signup/Signup2";
import Courses2 from "./pages/courses2/Courses2";
import Course2 from "./pages/course2/Course2";

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
        {/* <Route path={"/courses"} element={<Courses />} /> */}
        <Route path={"/courses2"} element={<Courses2 />} />
        <Route path={"/courses/:courseId"} element={<Course2 />} />
        {/* <Route path={"/purchasedCourses"} element={<PurchasedCourses />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
