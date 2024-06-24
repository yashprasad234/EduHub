const course = {
  id: 1,
  title: "Introduction to JavaScript",
  description:
    "Learn the basics of JavaScript, the most popular programming language for web development. This course covers variables, functions, and basic DOM manipulation to build interactive websites. Perfect for beginners looking to start their coding journey.",
  instructor: "John Doe",
  duration: 20,
  price: 99.99,
  imgURL: "https://picsum.photos/600/400",
};

export default function Course() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;

  return (
    <div className="w-full h-96 bg-slate-700 px-8 py-12 relative">
      <div className="flex flex-col gap-4 ml-16 w-1/2 mr-8 text-white">
        <h1 className="text-5xl font-bold">{course.title}</h1>
        <p className="text-lg">{course.description}</p>
        <div className="flex gap-8 items-center">
          <p className="bg-yellow-600 text-sm py-1 px-2">BESTSELLER</p>
          <p className="text-sm">⭐⭐⭐⭐⭐ (3,54,612 ratings)</p>
          <p className="text-sm">4,25,34 students</p>
        </div>
        <h6 className="text-sm">Created by {course.instructor}</h6>
        <div className="flex">
          <p>
            Last updated {`${new Date().getMonth() + 1}`.padStart(2, "0")}/
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
      <div className="absolute w-1/4 bg-white h-96 z-20 p-0.5 rounded-md flex flex-col gap-2 top-32 right-12 shadow-md">
        <img
          src={course.imgURL}
          alt=""
          className="border border-slate-800 rounded-t-md"
        />
        <div className="flex items-center gap-4 px-4">
          <p className="text-xl text-black">₹ {course.price}</p>
          <p className="text-sm line-through text-gray-600">
            ₹ {course.price * 5}
          </p>
          <p className="text-xl text-gray-700">80% off</p>
        </div>
        <div className="flex px-4 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 text-red-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-md text-red-600">
            <span className="font-bold">23 hours</span> left at this price!
          </p>
        </div>
        <div className="px-4">
          <button className="border w-full border-slate-800 hover:bg-slate-800 hover:text-white rounded-md py-4">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
