import { useState } from "react";
import "./createCourse.css";
import { Card, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: "",
    desc: "",
    price: 0,
    imgUrl: "",
    duration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    const res = await axios.post(`${BACKEND_URL}api/admin/courses`, course, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    });
    console.log(res.data.msg);
    navigate("/courses");
  };

  return (
    <div>
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
          type="text"
          name="title"
          id="title"
          value={course.title}
          onChange={handleChange}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Description"
          type="text"
          name="desc"
          id="desc"
          value={course.desc}
          onChange={handleChange}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Image URL"
          type="text"
          name="imgUrl"
          id="imgUrl"
          value={course.imgUrl}
          onChange={handleChange}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Duration"
          type="number"
          name="duration"
          id="duration"
          value={course.duration}
          onChange={handleChange}
          fullWidth={true}
        />
        <TextField
          variant="outlined"
          label="Price"
          type="Number"
          name="price"
          id="price"
          value={course.price}
          onChange={handleChange}
          fullWidth={true}
        />
        <Button variant="contained" onClick={handleClick}>
          Add course
        </Button>
      </Card>
    </div>
  );
}
