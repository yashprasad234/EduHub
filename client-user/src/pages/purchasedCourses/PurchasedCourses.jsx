import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../../components/courseCard/CourseCard";

export default function PurchasedCourses() {
  const [courses, setCourses] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;

  const fetchCourses = async () => {
    const token = localStorage.getItem("user-token");
    try {
      const res = await axios.get(`${BACKEND_URL}purchasedCourses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(res.data.purchasedCourses);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="py-8">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course._id}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 bg-white"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            course={course}
          />
        );
      })}
    </div>
  );
}
