/* eslint-disable react/prop-types */
export default function TestimonialCard({ img, author, testimony, role, org }) {
  return (
    <div className="flex flex-col sm:h-full lg:h-96 p-8 shadow-xl rounded-2xl bg-white justify-around items-center">
      <h4 className="text-2xl font-bold">{`"${testimony}"`}</h4>
      <hr className="bg-slate-800 h-0.5 w-full" />
      <div className="flex items-center gap-8">
        <img
          src={img}
          className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-lg">{author}</p>
          <p className="text-lg text-gray-500">
            {role} @ {org}
          </p>
        </div>
      </div>
    </div>
  );
}
