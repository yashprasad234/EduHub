import React from "react";

export default function TestimonialCard({ img, name, testimony, course }) {
  return (
    <div className="container">
      <div className="flex justify-between">
        <div>
          <img src={img} alt={`${name}-image`} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{testimony}</p>
          <hr />
          <div>
            {/* icon */}
            <span>{course}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
