import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login2() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-6"></div>
      <div className="col-span-6 w-11/12 border border-black rounded-xl px-24 py-16 bg-white">
        <form>
          <h2 className="text-4xl">YOUR ACCOUNT</h2>
          <div className="flex flex-col my-8">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              id=""
              className="bg-inherit border border-slate-700 h-12"
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              id=""
              className="bg-inherit border border-slate-700 h-12"
            />
          </div>
          <button
            type="submit"
            className="border border-slate-700 bg-inherit px-4 py-2"
          >
            LOGIN
          </button>
        </form>
        <hr className="w-full border border-slate-700 mt-8 mb-8" />
        <div className="flex justify-between items-center">
          <p>DON'T HAVE AN ACCOUNT?</p>
          <button className="border border-slate-700 px-4 py-2">SIGNUP</button>
        </div>
      </div>
    </div>
  );
}