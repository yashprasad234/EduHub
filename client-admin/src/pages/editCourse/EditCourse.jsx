import { useEffect, useState } from "react";
import "./editCourse.css";
import { useParams } from "react-router-dom";
import { Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import CourseCard from "../../components/courseCard/CourseCard.jsx";

export default function EditCourse() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [courseUpdate, setCourseUpdate] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}api/admin/courses/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
            },
          }
        );
        console.log(res.data.course);
        setCourse(res.data.course);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourse();
  }, [courseUpdate]);

  console.log(course);

  useEffect(() => {
    setTitle(course.title || "");
    setDesc(course.desc || "");
    setImg(course.imgUrl || "");
    setDuration(course.duration || "");
    setPrice(course.price || "");
  }, [course]);

  const handleUpdate = async (e) => {
    const res = await axios.put(
      `${BACKEND_URL}api/admin/courses/${courseId}`,
      {
        title: title,
        desc: desc,
        price: price,
        duration: duration,
        imgUrl: img,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
        },
      }
    );
    console.log(res.data.msg);
    setCourseUpdate((p) => p + 1);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="block">
        <Typography variant="h1" style={{ color: "beige" }}>
          {course.title}
        </Typography>
      </div>
      <Card
        style={{
          width: "400px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          marginTop: "40px",
          marginLeft: "120px",
        }}
      >
        <TextField
          variant="outlined"
          label="Course Title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Description"
          id="description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Image URL"
          id="img"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Duration"
          id="duration"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Price"
          id="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          fullWidth={true}
        />
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </Card>
      <div style={{ position: "absolute", top: "100px", right: "150px" }}>
        <CourseCard course={course} edit={false} />
      </div>
    </div>
  );
}
