import React, { useState } from "react";
import TestimonialCard from "./testimonialCard/TestimonialCard";

const testimonies = [
  {
    id: 1,
    author: "Alice Johnson",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "EduHub has completely transformed the way I approach learning. The courses are well-structured and the instructors are top-notch. Highly recommended!",
    role: "Software Engineer",
    org: "Tech Solutions Inc.",
  },
  {
    id: 2,
    author: "Brian Smith",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "The hands-on projects in EduHub's courses have been invaluable. I feel more confident in my skills and have already applied what I've learned to my job.",
    role: "Data Analyst",
    org: "Data Insights Ltd.",
  },
  {
    id: 3,
    author: "Catherine Lee",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "I love the flexibility that EduHub offers. I can learn at my own pace and the content is always up-to-date with the latest industry trends.",
    role: "Web Developer",
    org: "Creative Web Agency",
  },
  {
    id: 4,
    author: "David Martinez",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "EduHub's courses are comprehensive and easy to follow. The instructors do a great job explaining complex topics in a way that's easy to understand.",
    role: "Cloud Engineer",
    org: "Cloud Innovations",
  },
  {
    id: 5,
    author: "Emily Davis",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "The variety of courses available on EduHub is impressive. No matter what you're interested in, there's something for everyone.",
    role: "Project Manager",
    org: "Global Enterprises",
  },
  {
    id: 6,
    author: "Frank Brown",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "I have taken several courses on EduHub and each one has exceeded my expectations. The interactive elements and community support are fantastic.",
    role: "Cybersecurity Specialist",
    org: "SecureTech",
  },
  {
    id: 7,
    author: "Grace Wilson",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "EduHub offers a great blend of theory and practical application. The real-world examples and case studies make learning engaging and relevant.",
    role: "UX/UI Designer",
    org: "Design Studio",
  },
  {
    id: 8,
    author: "Henry Lewis",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "The customer support at EduHub is excellent. Anytime I had a question, they were quick to respond and very helpful.",
    role: "DevOps Engineer",
    org: "TechOps",
  },
  {
    id: 9,
    author: "Isabella Moore",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "I appreciate the quality of the content on EduHub. The courses are well-researched and presented in an engaging manner.",
    role: "Marketing Specialist",
    org: "MarketMasters",
  },
  {
    id: 10,
    author: "Jack Thompson",
    img: "https://avatars.githubusercontent.com/u/64632275?v=4",
    testimony:
      "EduHub has helped me advance my career significantly. The skills I've gained have made me a more competitive candidate in the job market.",
    role: "Machine Learning Engineer",
    org: "AI Solutions",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex gap-4 justify-center items-center">
      <button
        className="bg-white rounded-full p-4 pointer"
        onClick={() => {
          setCurrent((prev) => (prev > 0 ? prev - 1 : testimonies.length - 1));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <TestimonialCard
        img={testimonies[current].img}
        author={testimonies[current].author}
        role={testimonies[current].role}
        org={testimonies[current].org}
        testimony={testimonies[current].testimony}
      />

      <button
        className="bg-white rounded-full p-4 pointer"
        onClick={() => {
          setCurrent((prev) => (prev < testimonies.length - 1 ? prev + 1 : 0));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
