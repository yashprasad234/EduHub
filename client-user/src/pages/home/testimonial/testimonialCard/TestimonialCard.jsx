/* eslint-disable react/prop-types */
export default function TestimonialCard({ img, author, testimony, role, org }) {
  return (
    <div className="flex flex-col sm:h-full lg:h-96 p-8 shadow-xl rounded-2xl bg-white justify-around items-center">
      <h4 className="text-2xl font-bold h-2/5">{`"${testimony}"`}</h4>
      <hr className="bg-slate-800 h-0.5 w-full my-4" />
      <div className="flex items-center gap-8 w-full">
        <img
          src={img}
          className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover ml-32"
        />
        <div className="flex flex-col ml-4">
          <p className="text-lg">{author}</p>
          <p className="text-sm text-gray-500">
            {role} @ {org}
          </p>
        </div>
      </div>
    </div>
  );
}
