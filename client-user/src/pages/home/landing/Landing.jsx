import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    // <div className="container p-6">
    <div className="grid grid-cols-12 gap-3 py-8 px-16">
      <div className="col-span-12 lg:col-span-6">
        <div>
          <div>
            <h1 className="text-5xl my-5">
              Unlock Your Potential with Expert-Led Courses
            </h1>
            <div className="text-xl">
              Welcome to EduHub, your hub for top-tier courses. Advance your
              career and join our growth-focused community.
            </div>
          </div>
          <div className="w-3/5 flex gap-4 justify-between mt-6">
            <button
              className="w-3/5 p-3 border-2 border-slate-800 text-sm hover:bg-slate-800 hover:text-yellow-50"
              onClick={() => {
                navigate("/signup");
              }}
            >
              BECOME A STUDENT
            </button>
            <button
              className="w-3/5 p-3 border-2 border-slate-800 text-sm hover:bg-slate-800 hover:text-yellow-50"
              onClick={() => {
                window.location = "http://localhost:5174";
              }}
            >
              BECOME AN EDUCATOR
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-12 lg:col-span-4 w-full h-full">
        <img
          src="https://app.rigi.club/wp-content/uploads/2022/09/How-create-and-sell-online-courses-for-free.png"
          className="my-5 h-full aspect-video rounded-3xl object-cover"
        />
      </div>
    </div>
    // </div>
  );
}
