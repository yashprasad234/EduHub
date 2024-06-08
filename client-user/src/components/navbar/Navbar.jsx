import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuMode, setMenuMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sticky top-0 bg-white text-slate-800">
      <div className="flex items-center justify-between px-6 pt-4">
        <div className="flex justify-between">
          <img src="" alt="" />
          <h4 className="text-3xl">EduHub</h4>
        </div>
        <div className="hidden lg:block">
          <ul className="flex mx-2 gap-8 py-2">
            <li
              className="cursor-pointer border-b border-slate-800 border-double"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </li>
            <li
              className="cursor-pointer border-b border-slate-800 border-double"
              onClick={() => {
                navigate("/login");
              }}
            >
              Signin
            </li>
            <li
              className="cursor-pointer border-b border-slate-800 border-double"
              onClick={() => {
                navigate("/courses");
              }}
            >
              Courses
            </li>
          </ul>
        </div>
        <div className="flex justify-between gap-5 lg:hidden">
          <button
            className="cursor-pointer focus:outline focus:outline-2 focus:outline-slate-500 "
            onClick={() => setMenuMode(!menuMode)}
          >
            {menuMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuMode ? (
        <div>
          <ul className="flex flex-col items-start mx-6 gap-2.5 py-2">
            <li className="cursor-pointer border-b border-slate-800 border-double">
              Signup
            </li>
            <li className="cursor-pointer border-b border-slate-800 border-double">
              Signin
            </li>
            <li className="cursor-pointer border-b border-slate-800 border-double">
              Courses
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
