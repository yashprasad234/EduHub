import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";
import EditCourse from "./pages/editCourse/EditCourse";
import CreateCourse from "./pages/createCourse/CreateCourse.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/signup"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/addCourse"} element={<CreateCourse />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/courses/:courseId"} element={<EditCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
