import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container p-6">
      <div className="grid grid-cols-12 gap-3">
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
            <div className="w-3/5 flex justify-between mt-6">
              <button
                className="w-2/5 p-3 border-2 border-slate-800 rounded-lg text-sm hover:bg-slate-800 hover:text-yellow-50"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </button>
              <button
                className="w-2/5 p-3 border-2 border-slate-800 rounded-lg text-sm hover:bg-slate-800 hover:text-yellow-50"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-12 lg:col-span-4 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww"
            alt="landing-img"
            className="my-5 h-full aspect-square rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
