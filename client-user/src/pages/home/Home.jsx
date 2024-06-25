import About from "./about/About";
import Courses from "./courses/Courses";
import Footer from "./footer/Footer";
import Landing from "./landing/Landing";
import Testimonial from "./testimonial/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Landing />
      <About />
      <Testimonial />
      <Courses />
    </div>
  );
}
