import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      try {
        const res = await axios.post(`${BACKEND_URL}register`, {
          email,
          password,
        });
        console.log(res.data);
        navigate("/signin");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("password and confirm password don't match");
    }
  };

  return (
    <div className="grid grid-cols-12 gap-2 p-4">
      <div className="col-span-10 lg:col-span-6 p-4">
        <div className="flex flex-col mt-28">
          <h1 className="text-6xl font-bold font-title leading-none">
            CREATE an ACCOUNT
          </h1>
          <p className="text-2xl">
            Create an account in order to purchase courses and access exclusive
            content.
          </p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 w-11/12 border border-black rounded-xl px-4 lg:px-24 py-16 bg-white">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl">YOUR ACCOUNT</h2>
          <div className="flex flex-col my-8">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              className="bg-inherit border border-slate-700 h-12 p-4"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              className="bg-inherit border border-slate-700 h-12 p-4"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
            <input
              type="password"
              name="confirmPassword"
              className="bg-inherit border border-slate-700 h-12 p-4"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="border border-slate-700 bg-inherit px-4 py-2 hover:bg-slate-800 hover:text-yellow-50"
          >
            SIGNUP
          </button>
        </form>
        <hr className="w-full border border-slate-700 mt-8 mb-8" />
        <div className="flex justify-between items-center">
          <p>ALREADY HAVE AN ACCOUNT?</p>
          <button
            className="border border-slate-700 px-4 py-2 hover:bg-slate-800 hover:text-yellow-50"
            onClick={() => {
              navigate("/signin");
            }}
          >
            SIGNIN
          </button>
        </div>
      </div>
    </div>
  );
}
