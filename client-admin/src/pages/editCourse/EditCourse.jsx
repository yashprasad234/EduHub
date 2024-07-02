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

export default function EditCourse() {
  // const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URI;

  return (
    <div className="lg:h-max grid grid-cols-12 gap-4 p-8">
      <div className="col-span-10 lg:col-span-6 shadow-xl bg-white rounded-2xl">
        <form className="p-8">
          <h2 className="text-4xl">YOUR ACCOUNT</h2>
          <div className="flex flex-col my-8">
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              name="text"
              className="bg-inherit border border-slate-700 h-12 p-4 "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="description">DESCRIPTION</label>
            <input
              type="text"
              name="description"
              id=""
              className="bg-inherit border border-slate-700 h-12 p-4 "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="imgUrl">IMGURL</label>
            <input
              type="text"
              name="imgUrl"
              id=""
              className="bg-inherit border border-slate-700 h-12 p-4 "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="price">PRICE</label>
            <input
              type="number"
              name="price"
              id=""
              className="bg-inherit border border-slate-700 h-12 p-4 "
            />
          </div>
          <div className="flex flex-col my-8">
            <label htmlFor="duration">DURATION</label>
            <input
              type="number"
              name="duration"
              id=""
              className="bg-inherit border border-slate-700 h-12 p-4 "
            />
          </div>
          <button
            type="submit"
            className="border block mx-auto w-1/2 border-slate-700 bg-inherit px-4 py-2 hover:bg-slate-800 hover:text-yellow-50 mt-12"
          >
            UPDATE
          </button>
        </form>
      </div>
      <div className="col-span-10 mx-auto my-auto lg:col-span-6 shadow-xl bg-white rounded-2xl p-4 flex flex-col justify-center h-max gap-4 w-10/12 mx-auto">
        <img
          src={course.imgURL}
          alt=""
          className="border border-slate-800 rounded-t-md"
        />
        <div className="flex flex-col gap-2 ">
          <h1 className="text-2xl font-bold text-">{course.title}</h1>
          <h3 className="text-lg text-">{course.description}</h3>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 lg:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-lg ">{course.duration} Hours</p>
          </div>

          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-lg">₹ {course.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
