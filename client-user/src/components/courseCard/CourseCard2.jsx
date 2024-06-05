import React from "react";

export default function CourseCard2({
  icon,
  title,
  desc,
  instructor,
  price,
  duration,
}) {
  return (
    <div className="container w-3/4 lg:w-1/2 mx-auto p-5 border-2 rounded-xl border-slate-800 mb-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8 w-3/4">
          <div className="flex items-center gap-4">
            <div className="bg-white border-2 border-slate-800 p-2 rounded-lg">
              {icon}
            </div>
            <h3 className="lg:text-2xl">{title}</h3>
          </div>
          <p className="text-sm">{desc}</p>
        </div>
        <div className="sm:none lg:w-1 lg:bg-slate-900"></div>
        <div className="flex flex-col gap-4 my-auto">
          <div className="flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 lg:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <p className="text-sm">{instructor}</p>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 lg:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p className="text-sm">₹ {price}</p>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 lg:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p className="text-sm">{duration} hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
