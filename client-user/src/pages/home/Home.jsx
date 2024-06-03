import About from "../../components/about/About";
import Landing from "../../components/landing/Landing";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Landing />
      <About />
    </div>
  );
}
