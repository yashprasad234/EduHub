import "./course.css";
import CourseCard from "../../components/courseCard/CourseCard";
import { Button } from "@mui/material/";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Courses() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    console.log(token);
    const fetchcourse = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}api/user/courses/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourse(res.data.course);
      } catch (err) {
        console.log({ msg: `Error fetching course: ${err}` });
      }
    };
    fetchcourse();
  }, []);

  const handleBuyCourse = async () => {
    try {
      const res = await axios.put(
        `${BACKEND_URL}api/user/courses/${course._id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      console.log(res.data.msg);
      navigate("/purchasedCourses");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(course);

  return (
    <div>
      <CourseCard course={course} />
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          style={{
            position: "absolute",
            bottom: "5px",
            left: "210px",
            borderRadius: "20px",
          }}
          onClick={handleBuyCourse}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}
