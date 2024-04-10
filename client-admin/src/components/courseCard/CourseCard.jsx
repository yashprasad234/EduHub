import "./courseCard.css";
import { Card, Typography } from "@mui/material";
import { EditOutlined } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course, edit, admin }) {
  const navigate = useNavigate();

  return (
    <>
      <Card className="courseCard" style={{ width: edit ? "280px" : "300px" }}>
        <img
          src={course.imgUrl}
          alt="hkirat"
          className="courseImg"
          style={{
            height: edit ? "150px" : "170px",
            width: edit ? "270px" : "290px",
          }}
        />
        <div className="courseDetails">
          <Typography
            variant="subtitle2"
            style={{ fontSize: edit ? "17px" : "20px" }}
          >
            {course.title}
          </Typography>
          <Typography
            variant="body2"
            style={{ fontSize: edit ? "12px" : "14px" }}
          >
            {course.desc}
          </Typography>
          {/* <Typography
            variant="body2"
            style={{ color: "grey", fontSize: "12px" }}
          >
            {course.instructor}
          </Typography> */}
          {!admin ? (
            <Typography variant="body2">
              <strong>5.0</strong>{" "}
              <span style={{ fontSize: edit ? "11px" : "13px", color: "grey" }}>
                ⭐⭐⭐⭐⭐ (368,123)
              </span>
            </Typography>
          ) : (
            <Typography
              variant="body2"
              style={{ color: admin ? "black" : "grey", fontSize: "13px" }}
            >
              {course.duration} weeks
            </Typography>
          )}
          <Typography
            variant="subtitle2"
            style={{ fontSize: edit ? "16px" : "18px" }}
          >
            ₹
            <span style={{ fontSize: edit ? "14px" : "16px" }}>
              {course.price}
            </span>
          </Typography>
        </div>
        {edit ? (
          <div style={{ position: "relative" }}>
            <EditOutlined
              className="editIcon"
              onClick={() => navigate(`/courses/${course._id}`)}
            />
          </div>
        ) : (
          <></>
        )}
      </Card>
    </>
  );
}
