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
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-12 lg:col-span-5 w-full h-full">
        <img
          src="../../../../images/eduhub-landing-img.png"
          className="my-5 h-96 aspect-video object-cover hidden lg:block"
        />
      </div>
    </div>
  );
}
