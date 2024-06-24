import React from "react";

export default function TestimonialCard({ img, author, testimony, role, org }) {
  return (
    <div className="flex flex-col h-96 p-8 shadow-2 rounded-2xl w-1/2 bg-white justify-around items-center">
      <h4 className="text-2xl font-bold">"{testimony}"</h4>
      <hr className="bg-slate-800 h-0.5 w-full" />
      <div className="flex items-center gap-8">
        <img src={img} className="w-28 h-28 rounded-full object-cover" />
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
