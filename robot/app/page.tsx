import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import PageTest from "@/components/PageTest";

export default function Home() {
  return (
    <main className=" w-full">
      <Hero />
      <Contact />
      <Projects />
    </main>
  );
}
