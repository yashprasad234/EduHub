/* eslint-disable react/prop-types */
export default function AboutCard({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-4 border-2 border-slate-800 rounded-lg p-12">
      {icon}
      <h4 className="text-2xl">{title}</h4>
      <p className="text-md">{description}</p>
    </div>
  );
}
