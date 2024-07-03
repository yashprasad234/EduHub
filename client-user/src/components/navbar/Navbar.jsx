import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuMode, setMenuMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sticky top-0 bg-white text-slate-800 z-50">
      <div className="flex items-center justify-between px-6 pt-4">
        <div className="flex justify-between">
          <img src="" alt="" />
          <h3 className="text-3xl cursor-pointer" onClick={() => navigate("/")}>
            EduHub
          </h3>
        </div>
        <div className="hidden lg:block">
          <div className="flex mx-2 gap-8 py-2">
            <NavLink
              to={"/signup"}
              className={({ isActive }) =>
                isActive ? "border-b border-double border-slate-800" : ""
              }
            >
              Signup
            </NavLink>
            <NavLink
              to={"/signin"}
              className={({ isActive }) =>
                isActive ? "border-b border-double border-slate-800" : ""
              }
            >
              Signin
            </NavLink>
            <NavLink
              to={"/courses"}
              className={({ isActive }) =>
                isActive ? "border-b border-double border-slate-800" : ""
              }
            >
              Courses
            </NavLink>
          </div>
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
          <div className="flex flex-col items-start mx-6 gap-2.5 py-2">
            <NavLink
              to={"/signup"}
              className={({ isActive }) =>
                isActive ? "border-b border-double border-slate-800" : ""
              }
            >
              Signup
            </NavLink>
            <NavLink
              to={"/signin"}
              className={({ isActive }) =>
                isActive ? "border-b border-double border-slate-800" : ""
              }
            >
              Signin
            </NavLink>
            <NavLink
              to={"/courses"}
              className={({ isActive }) =>
                isActive ? "border-b border-double border-slate-800" : ""
              }
            >
              Courses
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
