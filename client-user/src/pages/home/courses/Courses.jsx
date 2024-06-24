import React from "react";
import CourseCard from "../../../components/courseCard/CourseCard";

const courses = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    description:
      "Learn the basics of JavaScript, the most popular programming language for web development. This course covers variables, functions, and basic DOM manipulation to build interactive websites. Perfect for beginners looking to start their coding journey.",
    instructor: "John Doe",
    duration: 20,
    price: 99.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    id: 2,
    title: "Advanced Python Programming",
    description:
      "Deep dive into advanced concepts of Python programming including OOP, decorators, and generators. This course is designed for those who have basic knowledge of Python and want to explore more complex topics and applications.",
    instructor: "Jane Smith",
    duration: 30,
    price: 149.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description:
      "A comprehensive bootcamp covering HTML, CSS, JavaScript, and React. Build modern web applications from scratch, and learn essential skills for front-end and back-end development. Ideal for aspiring full-stack developers.",
    instructor: "Emily Johnson",
    duration: 60,
    price: 299.99,
    imgURL: "https://picsum.photos/600/400",
  },
];

export default function Courses() {
  return (
    <div className="flex flex-col justify-center gap-6">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
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
            title={course.title}
            desc={course.description}
            instructor={course.instructor}
            price={course.price}
            duration={course.duration}
          />
        );
      })}
      <button className="p-2 w-48 rounded-lg self-center mb-10 bg-amber-500 text-slate-800">
        See all courses
      </button>
    </div>
  );
}
