import { useState } from "react";
import TestimonialCard from "./testimonialCard/TestimonialCard";

const testimonies = [
  {
    id: 1,
    author: "Alice Johnson",
    img: "https://images.unsplash.com/photo-1718964313551-420f92249238?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "EduHub has completely transformed the way I approach learning. The courses are well-structured and the instructors are top-notch. Highly recommended!",
    role: "Software Engineer",
    org: "Tech Solutions Inc.",
  },
  {
    id: 2,
    author: "Brian Smith",
    img: "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "The hands-on projects in EduHub's courses have been invaluable. I feel more confident in my skills and have already applied what I've learned to my job.",
    role: "Data Analyst",
    org: "Data Insights Ltd.",
  },
  {
    id: 3,
    author: "Catherine Lee",
    img: "https://images.unsplash.com/photo-1585600255897-eb44d312c178?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "I love the flexibility that EduHub offers. I can learn at my own pace and the content is always up-to-date with the latest industry trends.",
    role: "Web Developer",
    org: "Creative Web Agency",
  },
  {
    id: 4,
    author: "David Martinez",
    img: "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "EduHub's courses are comprehensive and easy to follow. The instructors do a great job explaining complex topics in a way that's easy to understand.",
    role: "Cloud Engineer",
    org: "Cloud Innovations",
  },
  {
    id: 5,
    author: "Emily Davis",
    img: "https://images.unsplash.com/photo-1719124627446-22102efda889?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "The variety of courses available on EduHub is impressive. No matter what you're interested in, there's something for everyone.",
    role: "Project Manager",
    org: "Global Enterprises",
  },
  {
    id: 6,
    author: "Frank Brown",
    img: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "I have taken several courses on EduHub and each one has exceeded my expectations. The interactive elements and community support are fantastic.",
    role: "Cybersecurity Specialist",
    org: "SecureTech",
  },
  {
    id: 7,
    author: "Grace Wilson",
    img: "https://images.unsplash.com/photo-1713693212474-efe7a31ae57e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "EduHub offers a great blend of theory and practical application. The real-world examples and case studies make learning engaging and relevant.",
    role: "UX/UI Designer",
    org: "Design Studio",
  },
  {
    id: 8,
    author: "Henry Lewis",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "The customer support at EduHub is excellent. Anytime I had a question, they were quick to respond and very helpful.",
    role: "DevOps Engineer",
    org: "TechOps",
  },
  {
    id: 10,
    author: "Yash Prasad",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "I appreciate the quality of the content on EduHub. The courses are well-researched and presented in an engaging manner.",
    role: "Software Developer",
    org: "Google",
  },
  {
    id: 10,
    author: "Jack Thompson",
    img: "https://images.unsplash.com/photo-1658348181593-23412aa23900?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "EduHub has helped me advance my career significantly. The skills I've gained have made me a more competitive candidate in the job market.",
    role: "Machine Learning Engineer",
    org: "AI Solutions",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-1/2 self-center">
      <TestimonialCard
        img={testimonies[current].img}
        author={testimonies[current].author}
        role={testimonies[current].role}
        org={testimonies[current].org}
        testimony={testimonies[current].testimony}
      />

      <div className="flex gap-32">
        <button
          className="bg-white rounded-full p-4 pointer shadow-xl"
          onClick={() => {
            setCurrent((prev) =>
              prev > 0 ? prev - 1 : testimonies.length - 1
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="bg-white rounded-full p-4 pointer shadow-xl"
          onClick={() => {
            setCurrent((prev) =>
              prev < testimonies.length - 1 ? prev + 1 : 0
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
