import About from "./about/About";
import Courses from "../../components/courses/Courses";
import Footer from "./footer/Footer";
import Landing from "./landing/Landing";
import Testimonial from "./testimonial/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Landing />
      <About />
      <img
        src="./images/blob.svg"
        height={200}
        width={200}
        className="-ml-24 -mt-6 z-0"
      />
      {/* <Testimonial /> */}
      <Courses />
      <Footer />
    </div>
  );
}
