import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="">
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
