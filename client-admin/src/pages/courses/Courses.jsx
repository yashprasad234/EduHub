import "./courses.css";
import CourseCard from "../../components/courseCard/CourseCard";
import { Grid } from "@mui/material/";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("admin-token");
    console.log(token);
    const fetchMyCourses = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}api/admin/courses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMyCourses(res.data.courses);
      } catch (err) {
        console.log({ msg: `Error fetching courses: ${err}` });
      }
    };
    fetchMyCourses();
  }, []);

  console.log(myCourses);

  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
      >
        {myCourses.map((c) => (
          <Grid item key={c._id} lg={3} md={12} sm={12}>
            <CourseCard course={c} edit={true} admin />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
