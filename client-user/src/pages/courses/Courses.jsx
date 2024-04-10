import "./courses.css";
import CourseCard from "../../components/courseCard/CourseCard";
import { Grid } from "@mui/material/";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Courses() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    console.log(token);
    const fetchcourses = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}api/user/courses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(res.data.courses);
      } catch (err) {
        console.log({ msg: `Error fetching courses: ${err}` });
      }
    };
    fetchcourses();
  }, []);

  console.log(courses);

  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
      >
        {courses.map((c) => (
          <Grid item key={c._id} lg={3} md={12} sm={12}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/courses/${c._id}`)}
            >
              <CourseCard course={c} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
