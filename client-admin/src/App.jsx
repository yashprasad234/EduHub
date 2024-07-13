import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Courses from "./pages/courses/Courses";
import EditCourse from "./pages/editCourse/EditCourse";
import CreateCourse from "./pages/createCourse/CreateCourse.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Signin />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/addCourse"} element={<CreateCourse />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/courses/:courseId"} element={<EditCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
