import { useState } from "react";
import { Card, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: "",
    desc: "",
    price: 0,
    imgUrl: "",
    duration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    const res = await axios.post(`${BACKEND_URL}api/admin/courses`, course, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    });
    console.log(res.data.msg);
    navigate("/courses");
  };

  return (
    <div className="col-span-12 lg:col-span-6 w-4/5 lg:w-1/2 md:w-3/4  border border-black rounded-xl px-4 lg:px-24 py-16 bg-white mx-auto my-12">
        <form >
          <h2 className="text-4xl">CREATE COURSE</h2>
          <div className="flex flex-col my-8">
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              name="title"
              placeholder="TITLE OF YOUR COURSE"
              className="bg-inherit border border-slate-700 h-12 px-4 text-sm "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="description">DESCRIPTION</label>
            <input
              type="text"
              name="description"
              placeholder="DESCRIPTION OF YOUR COURSE"
              className="bg-inherit border border-slate-700 h-12 px-4 text-sm "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="imgUrl">IMAGE URL</label>
            <input
              type="text"
              name="imgUrl"
              placeholder="IMAGE URL FOR YOUR COURSE IMAGE"
              className="bg-inherit border border-slate-700 h-12 px-4 text-sm "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="price">PRICE</label>
            <input
              type="number"
              name="price"
              placeholder="PRICE OF YOUR COURSE IN INR"
              className="bg-inherit border border-slate-700 h-12 px-4 text-sm "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="duration">DURATION</label>
            <input
              type="number"
              name="duration"
              placeholder="DURATION OF THE COURSE IN WEEKS"
              className="bg-inherit border border-slate-700 h-12 px-4 text-sm "
            />
          </div>
          <button
            type="submit"
            className="border mx-auto w-full mt-4 text-xl border-slate-700 bg-inherit px-4 py-2 hover:bg-slate-800 hover:text-yellow-50"
          >
            CREATE COURSE
          </button>
        </form>
      </div>
  );
}
