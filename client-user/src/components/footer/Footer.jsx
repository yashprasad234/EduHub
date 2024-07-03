export default function Footer() {
  return (
    <div className="bg-slate-800 text-white flex flex-col gap-4 items-center md:items-stretch pb-8 bottom-0">
      <div className="flex flex-col lg:flex-row gap-4 justify-between py-8 px-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Eduhub</h2>
          <ul className="flex flex-col gap-4 text-sm">
            <li>New Delhi, India</li>
            <li>+91 9599460826</li>
            <li>yashprasad272@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Explore</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Follow us</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl">Legals</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <h4 className="text-lg text-center">
        Copyright © 2024 EduHub. All rights reserved.
      </h4>
    </div>
  );
}
