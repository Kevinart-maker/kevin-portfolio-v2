import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import ProjectSlider from "./components/layout/ProjectSlider";
import About from "./components/layout/About";
import Works from "./components/layout/Works";
import Services from "./components/layout/Services";
import Testimonial from "./components/layout/Testimonials";

export default function Home() {
  return (
    <main className="bg-[var(--background)]">

      <div className='flex flex-col'>
        <Header />
        <ProjectSlider />
        <Services />
        <Works />
        <Testimonial />
        <About />
      </div>

    </main>
  );
}