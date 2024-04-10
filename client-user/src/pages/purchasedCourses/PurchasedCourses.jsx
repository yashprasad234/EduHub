import "./purchasedCourses.css";
import CourseCard from "../../components/courseCard/CourseCard";
import { Grid } from "@mui/material/";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    console.log(token);
    const fetchcourses = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}api/user/purchasedCourses/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourses(res.data.purchasedCourses);
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
        {courses?.map((c) => (
          <Grid item key={c._id} lg={3} md={12} sm={12}>
            <CourseCard course={c} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
