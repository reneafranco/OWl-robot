// pages/index.js
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="">
        <NavBar />
        <Hero />

        <About />
      </div>
    </main>
  );
}
