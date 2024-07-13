/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
import { RecoilRoot, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import userState from "./store/atoms/userState";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <InitUser />
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
    </RecoilRoot>
  );
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const fetchMe = async () => {
    try {
      const token = localStorage.getItem("user-token");
      const res = axios.get(`${BACKEND_URL}me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      if (res.data.userEmail) {
        setUser({
          isLoading: false,
          user: res.data.userEmail,
        });
      } else {
        setUser({
          isLoading: false,
          user: null,
        });
      }
    } catch (err) {
      console.log(err);
      setUser({
        isLoading: false,
        user: null,
      });
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return <></>;
}

export default App;
