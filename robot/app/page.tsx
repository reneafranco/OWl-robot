// pages/index.js
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-clip">
      <div className="">
        <NavBar />
        <Hero />
      </div>
    </main>
  );
}
