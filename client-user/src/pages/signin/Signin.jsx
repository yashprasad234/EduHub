/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import userState from "../../store/atoms/userState";

export default function Signin() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user-token");
    try {
      const res = await axios.post(`${BACKEND_URL}login`, null, {
        headers: {
          email,
          password,
        },
      });
      // console.log(res.data.token);
      localStorage.setItem("user-token", res.data.token);
      // console.log(res.data.msg);
      navigate("/courses");
      setUser({
        isLoading: false,
        user: email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-2 p-4">
      <div className="col-span-10 lg:col-span-6 p-4">
        <div className="flex flex-col mt-28">
          <p className="text-xl -mb-4">Sign in</p>
          <h1 className="text-6xl font-bold font-title">WELCOME BACK</h1>
          <p className="text-2xl -mt-4">
            Sign back in to your account to access your courses and embody the
            art of being human.
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-inherit border border-slate-700 h-12 p-4"
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-inherit border border-slate-700 h-12 p-4"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="border border-slate-700 bg-inherit px-4 py-2 hover:bg-slate-800 hover:text-yellow-50"
            >
              SIGNIN
            </button>
            <div className="text-right">
              <p className="text-sm">test email: testuser@email.com</p>
              <p className="text-sm">test password: testuser123</p>
            </div>
          </div>
        </form>
        <hr className="w-full border border-slate-700 mt-8 mb-8" />
        <div className="flex justify-between items-center">
          <p>DON'T HAVE AN ACCOUNT?</p>
          <button
            className="border border-slate-700 px-4 py-2 hover:bg-slate-800 hover:text-yellow-50"
            onClick={() => navigate("/signup")}
          >
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
}
