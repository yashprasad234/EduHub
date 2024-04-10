import "./courseCard.css";
import { Card, Typography, Button } from "@mui/material";
import { EditOutlined } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <>
      <Card className="courseCard" style={{ width: "280px" }}>
        <img
          src={course.imgUrl}
          alt="hkirat"
          className="courseImg"
          style={{
            height: "150px",
            width: "270px",
          }}
        />
        <div className="courseDetails">
          <Typography variant="subtitle2" style={{ fontSize: "17px" }}>
            {course.title}
          </Typography>
          <Typography variant="body2" style={{ fontSize: "12px" }}>
            {course.desc}
          </Typography>
          {/* <Typography
            variant="body2"
            style={{ color: "grey", fontSize: "12px" }}
          >
            {course.instructor}
          </Typography> */}

          <Typography variant="body2">
            <strong>5.0</strong>{" "}
            <span style={{ fontSize: "11px", color: "grey" }}>
              ⭐⭐⭐⭐⭐ (368,123)
            </span>
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "grey", fontSize: "13px" }}
          >
            {course.duration} weeks
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: "16px" }}>
            ₹<span style={{ fontSize: "14px" }}>{course.price}</span>
          </Typography>
        </div>
        <div style={{ position: "relative" }}></div>
      </Card>
    </>
  );
}
