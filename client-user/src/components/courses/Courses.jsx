import React from "react";
import CourseCard2 from "../courseCard/CourseCard2";

export default function Courses() {
  return (
    <div className="flex flex-col justify-center gap-6">
      <CourseCard2
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
        title={"Web development course"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere ullam dignissimos ea, laboriosam sunt. Nisi, natus optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere ullam dignissimos ea, laboriosam sunt. Nisi, natus optio!"
        }
        instructor={"Yash Prasad"}
        price={2000}
        duration={40}
      />
      <button className="p-2 w-48 rounded-lg self-center mb-10 bg-amber-500 text-slate-800">
        See all courses
      </button>
    </div>
  );
}
